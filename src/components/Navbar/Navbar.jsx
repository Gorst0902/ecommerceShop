import React from 'react'

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "#",
    },
    {
        id: 2,
        name: "Shop",
        link: "/#shop",
    },
    {
        id: 3,
        name: "About",
        link: "#",
    },
    {
        id: 4,
        name: "Blog",
        link: "/#blog",
    },
]

const Navbar = () => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className="container">
                    <div className='flex items-center gap-4'>
                        <a href="#"
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                        >
                            Gorst
                        </a>

                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4'>
                                {
                                    MenuLinks.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link}>{data.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar