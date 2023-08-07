import React from 'react'

const ProfilePage = () => {
    return (
        <div className={'min-h-screen'}>
            <div className='images h-32 md:h-40 lg:h-60 relative mb-10'>
                <div style={{
                    backgroundImage: `url("${'https://media.licdn.com/dms/image/D5616AQETNHp8IXY0qQ/profile-displaybackgroundimage-shrink_350_1400/0/1684225402962?e=1697068800&v=beta&t=Ed-qG5VNZimtsupRheiZHDjlNzy3XTHfEWYVOr3FU2A'}")`,
                }} className='banner h-full w-full bg-center bg-cover lg:rounded-2xl'></div>
                <div className='profile-img absolute h-2/3 lg:h-3/4 aspect-square lg:-bottom-10 -bottom-5 left-10'>
                    <img
                        className={'w-full h-full rounded-full'}
                        src='https://media.licdn.com/dms/image/D5603AQHNMd72rqkpWg/profile-displayphoto-shrink_200_200/0/1684225877764?e=1697068800&v=beta&t=Ae1hbDRaKSSIoq9L5OmJnV99P4umkmSpl79pQTsBXsk'
                        alt='Profile' />
                </div>
            </div>
            <div className='info p-10'>
                <div className='name'>
                    <h1 className={"font-semibold text-4xl"}>Anmol Anand</h1>
                    <p className={"font-light text-gray-600 text-lg"}>anmol@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage