import React from 'react'
import Animation from '../Animation/Animation'

function About({ className, ...rest }) {
    return (
        <Animation>
             <div className={`100vh ${className}`} dir="ltr" {...rest}>
                <div className='text-center'>
                    <div className="inline-block relative">
                        <h1 className='font-bold text-4xl py-4'>فكرة المشروع</h1>
                        <span
                            className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 rounded-2xl bg-[#0D6EFD] w-1/2"
                        ></span>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                        <div>
                            <div className='flex flex-col justify-center items-center gap-3 shadow-md rounded-lg py-10 my-5 transition-transform duration-300 hover:-translate-y-2 hover:scale-100'>
                                <span className='text-[#0D6EFD] text-4xl'><i className="fa-solid fa-magnifying-glass"></i></span>
                                <h3>اكتشف الفرص</h3>
                                <p>دور على فرص التطوع بطريقة سهلة</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-3 shadow-md rounded-lg py-10 transition-transform duration-300 hover:-translate-y-2 hover:scale-100'>
                                <span className='text-[#0D6EFD] text-4xl'><i className="fa-solid fa-award"></i></span>
                                <h3>مكافآت </h3>
                                <p>احصل على تقدير لمشاركاتك التطوعية</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col justify-center items-center gap-3 shadow-md rounded-lg py-10 my-5 transition-transform duration-300 hover:-translate-y-2 hover:scale-100'>
                                <span className='text-[#0D6EFD] text-4xl'><i className="fa-solid fa-user-gear"></i></span>
                                <h3>إدارة المتطوعين</h3>
                                <p>أدوات سهلة لإدارة فريق التطوع بتاعك</p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-3 shadow-md rounded-lg py-10 transition-transform duration-300 hover:-translate-y-2 hover:scale-100'>
                                <span className='text-[#0D6EFD] text-4xl'><i className="fa-solid fa-chart-line"></i></span>
                                <h3>تابع إنجازاتك </h3>
                                <p>شوف أثر وقيمة عملك التطوعي</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-end gap-5 text-end'>
                        <p className='text-2xl'>. هدفنا إننا نسهل التطوع للمؤسسات والناس، من خلال مكان واحد تقدر تلاقي فيه فرص التطوع، وتدير المهام، وتتواصل مع غيرك، وكمان تاخد مكافآت على مجهودك</p>

                        <h2 className='text-xl'>.من خلال منصتنا، هتقدر تدور على الفرص وتقدم عليها وتتابع مجهودك بسهولة</h2>

                        <div className='text-xl '>
                            <ul>
                                <li className='py-2'> سهولة التسجيل والاستخدام<span className='bg-[#0D6EFD] text-white py-0.5 px-2 mx-2 rounded-full'><i className="fa-solid fa-check"></i></span></li>
                                <li className='py-2'>ربط فوري مع المؤسسات المناسبة<span className='bg-[#0D6EFD] text-white py-0.5 px-2 mx-2 rounded-full'><i className="fa-solid fa-check"></i></span></li>
                                <li className='py-2'>متابعة تقدمك ومجهودك بشكل مستمر <span className='bg-[#0D6EFD] text-white py-0.5 px-2 mx-2 rounded-full'><i className="fa-solid fa-check"></i></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Animation>
       
    )
}

export default About
