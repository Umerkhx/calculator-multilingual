import { Locale } from '@/lib/i18n';
import Link from 'next/link';
import React from 'react'

interface AboutSectionProps {
    locale: Locale;
}
function AboutSection({ locale }: AboutSectionProps) {
    return (
        <section className='my-10 px-5'>
            <div >
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-center mb-4">About Us</h2>
                <p className="mx-auto max-w-4xl text-black/90 text-center mb-6 font-medium text-base">In many ways, life is full of numbers and almost everything can be calculated. Should you buy or rent? What’s your ideal daily calorie intake? Can you afford that loan? How much should you charge to break even? Too often, we skip these questions because we lack the time, tools, or confidence to calculate. That’s where Calyx comes in turning complex formulas into clear, instant answers. With Calyx, you can make smarter, data-driven decisions effortlessly, using simple, reliable online calculators for every need.</p>
                <p className="mx-auto max-w-xl text-zinc-800 text-center font-black text-3xl">  <span  className="text-6xl mr-2 text-red-500 align-middle">“</span>
  At Calyx, we’re designing intelligent tools to make every calculation effortless and accessible.
  <span className="text-6xl ml-2 text-red-500 align-middle">”</span></p>

                <div className='flex justify-center items-center mt-2'>
                    <Link href={`${locale}/about`} className="mt-4 rounded-lg bg-transparent 
                    border-black border px-8 py-3 font-semibold text-zinc-950 hover:bg-zinc-900 hover:text-zinc-50  duration-200 backdrop-blur-md transition ease-in hover:scale-105">Learn More About Us</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutSection