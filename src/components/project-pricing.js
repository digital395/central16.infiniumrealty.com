import Image from "next/image";

export default function(){
    return(
        <section className='price-section container mx-auto grid px-4 lg:min-h-[550px]'>
                <div className='flex flex-col justify-center items-center gap-12 pt-14 lg:col-span-2'>
                    <h4 className='subheading'>Price Table</h4>
                    <h6 className='text-2xl text-center lg:text-left'>Villa Price: <span className='text-4xl blue-text'>₹4.32 Cr</span> Onwards*</h6>
                    <div className='w-full border border-gray-400 rounded-xl overflow-hidden lg:w-2/3'>
                    <table className='w-full hidden lg:table table-auto'>
                        <thead>
                            <tr>
                                <th className='p-4 border-r border-gray-400'>BHK</th>
                                <th className='p-4 border-r border-gray-400'>Unit Type</th>
                                <th className='p-4 border-r border-gray-400'>Land Area</th>
                                <th className='p-4 border-r border-gray-400'>Super BUA</th>
                                <th className='p-4'>Price</th>
                            </tr>
                            <tr className='blue-bg'>
                                <th className='p-4 border-r border-gray-400'>4 BHK</th>
                                <th className='p-4 border-r border-gray-400'>Villa</th>
                                <th className='p-4 border-r border-gray-400'>7.4 to 9.4 Cents</th>
                                <th className='p-4 border-r border-gray-400'>3600 Sq.Ft to 4300 Sq.Ft</th>
                                <th className='p-4'> Rs.4.32 Cr Onwards </th>
                            </tr>
                        </thead>
                    </table>
                    <table className='w-full table lg:hidden table-auto'>
                        <thead>
                            <tr>
                                <th className='p-4 border-b border-gray-400 blue-bg'>BHK</th>
                                <th className='p-4 border-b border-gray-400'>4 BHK</th>
                            </tr>
                            <tr>
                                <th className='p-4 border-b border-gray-400 blue-bg'>Unit Type</th>
                                <th className='p-4 border-b border-gray-400'>Villa</th>
                            </tr>
                            <tr>
                                <th className='p-4 border-b border-gray-400 blue-bg'>Land Area</th>
                                <th className='p-4 border-b border-gray-400'>7.4 to 9.4 Cents</th>
                            </tr>
                            <tr>
                                <th className='p-4 border-b border-gray-400 blue-bg'>Super BUA</th>
                                <th className='p-4 border-b border-gray-400'>3600 Sq.Ft to 4300 Sq.Ft</th>
                            </tr>
                            <tr>
                                <th className='p-4 border-b border-gray-400 blue-bg'>Price</th>
                                <th className='p-4 border-b border-gray-400'> ₹.4.32 Cr Onwards </th>
                            </tr>
                            
                        </thead>
                    </table>
                   </div>
                </div>
                
            </section>
    )
}