import React from 'react'


function Footer() {
    return <>
    <div className='bg-[#333333] text-white p-10' dir='rtl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto py-5'>
            <div>
                <h1 className='font-bold text-3xl py-2'>طوعني </h1>
                <p className='py-2'>منصة بتربط المتطوعين بالفرص التطوعية بطريقة سهلة وفعالة.</p>
                <div className='flex justify-start items-center gap-5 text-lg py-4'> 
                    <div className='text-white bg-neutral-700 py-2 px-3 rounded-full hover:bg-[#4E8DF5] hover:-translate-y-0.5 transition-all duration-300 ease hover:cursor-pointer'><i class="fa-brands fa-facebook"></i></div>
                    <div className='text-white bg-neutral-700 py-2 px-3 rounded-full hover:bg-[#4E8DF5] hover:-translate-y-0.5 transition-all duration-300 ease hover:cursor-pointer'><i class="fa-brands fa-twitter"></i></div>
                    <div className='text-white bg-neutral-700 py-2 px-3 rounded-full hover:bg-[#4E8DF5] hover:-translate-y-0.5 transition-all duration-300 ease hover:cursor-pointer'><i class="fa-brands fa-instagram"></i></div>
                    <div className='text-white bg-neutral-700 py-2 px-3 rounded-full hover:bg-[#4E8DF5] hover:-translate-y-0.5 transition-all duration-300 ease hover:cursor-pointer'><i class="fa-brands fa-linkedin"></i></div>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-3xl py-2'>روابط سريعة </h1>
                <ul className='text-lg'>
                    <li className='py-1'>&gt; &nbsp; الرئيسية</li>
                    <li className='py-1'>&gt; &nbsp; عن المنصة</li>
                    <li className='py-1'>&gt; &nbsp; فريقنا</li>
                </ul>
            </div>

            <div>
                <h1 className='font-bold text-3xl py-2'>اكتشف   </h1>
                <ul className='text-lg'>
                    <li className='py-1'>&gt; &nbsp; فرص التطوع</li>
                    <li className='py-1'>&gt; &nbsp; المؤسسات المشاركة</li>
                    <li className='py-1'>&gt; &nbsp; قصص نجاح</li>
                    <li className='py-1'>&gt; &nbsp; المدونة </li>
                </ul>
            </div>

            <div>
                <h1 className='font-bold text-3xl py-2'>بيانات الاتصال </h1>
                <ul className='text-lg'>
                    <li className='py-1'><i class="fa-solid fa-location-dot"></i> &nbsp; الرئيسية</li>
                    <li className='py-1'><i class="fa-solid fa-envelope"></i> &nbsp; عن المنصة</li>
                    <li className='py-1'><i class="fa-solid fa-phone"></i> &nbsp; فريقنا</li>
                </ul>
            </div>
        </div>

        <hr />
        <div className='text-center text-lg py-5'>
            
            <p>&copy; 2025 طوعني | كل الحقوق محفوظة |  <span className='hover:cursor-pointer'> شروط الاستخدام   </span>  | <span className='hover:cursor-pointer'> سياسة الخصوصية</span></p>
        </div>
    </div>
    </>
}

export default Footer
