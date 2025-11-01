import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { getTranslation, type Locale } from "@/lib/i18n"
import type { Calculator, CalculatorSection } from "@/lib/calculators/types"

interface CalculatorSectionsProps {
  calculator: Calculator
  locale: Locale
  formulaFunc?: Function
}

export function CalculatorSections({ calculator, locale }: CalculatorSectionsProps) {
  const router = useRouter()
  const sections = calculator.sections || []

  const renderList = (listKey: string) => {
    if (!listKey) return null
    const list = getTranslation(locale, listKey)

    if (!Array.isArray(list)) return null

    return (
      <ul className="space-y-2 list-disc pl-6 text-gray-600 my-4">
        {list.map((item: any, index: number) => (
          <li key={index}>
            {typeof item === 'string' ? item : item}
          </li>
        ))}
      </ul>
    )
  }



  const renderPoints = (pointsKey: string) => {
    if (!pointsKey) return null
    const points = getTranslation(locale, pointsKey)

    if (!Array.isArray(points)) return null

    return (
      <ul className="space-y-2 list-disc pl-6 text-gray-600 my-4">
        {points.map((point: any, index: number) => (
          <li key={index}>
            {typeof point === 'string' ? point : point}
          </li>
        ))}
      </ul>
    )
  }

  const renderSubsection = (subsection: CalculatorSection, depth = 1) => {
    const paddingClass = depth > 0 ? "pl-6 border-l-2 border-gray-200" : ""

    return (
      <div key={subsection.id} className={`space-y-4 ${paddingClass}`}>
        {/* Title */}
        {subsection.titleKey && (
          <div className="scroll-mt-20" id={subsection.id}>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">
              {getTranslation(locale, subsection.titleKey)}
            </h3>
          </div>
        )}

        {/* Intro */}
        {subsection.introKey && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.introKey)}
          </p>
        )}

        {subsection.imageKey && (
          <div className="my-6 flex lg:justify-start justify-center">
            <img
              className="max-w-full h-auto rounded-lg"
              src={getTranslation(locale, subsection.imageKey)}
              width={600}
              height={400}
              fetchPriority="high"
              alt={subsection.imageAltKey ? getTranslation(locale, subsection.imageAltKey) : ""}
            />
          </div>
        )}

        {/* Content/Text */}
        {subsection.contentKey && !subsection.type && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.contentKey)}
          </p>
        )}

        {/* Text (different from content) */}
        {subsection.textKey && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.textKey)}
          </p>
        )}

        {/* List */}
        {subsection.listKey && renderList(subsection.listKey)}

        {/* Points */}
        {subsection.pointsKey && renderPoints(subsection.pointsKey)}

        {/* Formula */}
        {subsection.formulaKey && (
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 my-6">
            <p className="text-gray-700 font-mono text-sm whitespace-pre-wrap">
              {getTranslation(locale, subsection.formulaKey)}
            </p>
          </div>
        )}

        {/* Result */}
        {subsection.resultKey && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.resultKey)}
          </p>
        )}

        {/* Label */}
        {subsection.labelKey && (
          <p className="text-gray-700 font-semibold">
            {getTranslation(locale, subsection.labelKey)}
          </p>
        )}

        {/* End */}
        {subsection.endKey && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.endKey)}
          </p>
        )}

        {/* End2 */}
        {subsection.end2Key && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, subsection.end2Key)}
          </p>
        )}

     

        {/* Nested Subsections */}
        {subsection.subsections && subsection.subsections.length > 0 && (
          <div className="space-y-6 mt-6">
            {subsection.subsections.map((sub) => renderSubsection(sub, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  const renderSection = (section: CalculatorSection) => {
    return (
      <div key={section.id} className="space-y-4">
        {/* Section Title */}
        {section.titleKey && (
          <div className="scroll-mt-20" id={section.id}>
            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
              {getTranslation(locale, section.titleKey)}
            </h2>
          </div>
        )}

        {section.introKey && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, section.introKey)}
          </p>
        )}

        {section.contentKey && (
          <p className="text-gray-600 leading-relaxed">
            {getTranslation(locale, section.contentKey)}
          </p>
        )}

        {section.subsections && section.subsections.length > 0 && (
          <div className="space-y-8 mt-8">
            {section.subsections.map((subsection) => renderSubsection(subsection))}
          </div>
        )}
      </div>
    )
  }

  const flattenSections = (secs: CalculatorSection[]): CalculatorSection[] => {
    let flat: CalculatorSection[] = []
    secs.forEach((section) => {
      flat.push(section)
      if (section.subsections) {
        flat = flat.concat(flattenSections(section.subsections))
      }
    })
    return flat
  }

  const allSections = flattenSections(sections)

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      window.history.replaceState(null, "", `#${id}`)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Table of Contents */}
        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold uppercase text-gray-700 mb-4">On this page</h3>
              <nav className="space-y-2">
                {calculator.toc && calculator.toc.length > 0 ? (
                  calculator.toc.map((item: any) => {
                    const section = allSections.find((s) => s.id === item.id)
                    const isActive = false

                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(item.id)
                        }}
                        className={`block text-sm py-2 px-3 rounded-md transition-colors ${
                          isActive
                            ? "bg-blue-100 text-blue-900 font-medium"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {getTranslation(locale, item.labelKey)}
                      </a>
                    )
                  })
                ) : (
                  <p className="text-xs text-gray-500">No sections</p>
                )}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-0 space-y-8">
              {/* Render Main Sections */}
              {sections.map((section) => renderSection(section))}

              {/* Render FAQs */}
              {calculator.faqs && calculator.faqs.length > 0 && (
                <div id="faqs" className="scroll-mt-20 mt-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    {getTranslation(locale, calculator.faqTitleKey || "common.faqs")}
                  </h2>
                  <div className="space-y-4">
                    {calculator.faqs.map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="font-semibold text-gray-900 mb-2">
                          {getTranslation(locale, item.qKey)}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {getTranslation(locale, item.aKey)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}