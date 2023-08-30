import React from 'react'
import { Github, Link, Linkedin } from 'lucide-react'

const ProfilePage = () => {
    return (
        <div className={'min-h-screen'}>
            <div className="images h-32 md:h-40 lg:h-60 relative mb-10">
                <div
                    style={{
                        backgroundImage: `url("${'https://media.licdn.com/dms/image/D5616AQETNHp8IXY0qQ/profile-displaybackgroundimage-shrink_350_1400/0/1684225402962?e=1697068800&v=beta&t=Ed-qG5VNZimtsupRheiZHDjlNzy3XTHfEWYVOr3FU2A'}")`,
                    }}
                    className="banner h-full w-full bg-center bg-cover lg:rounded-2xl"
                ></div>
                <div className="profile-img absolute h-2/3 lg:h-3/4 aspect-square lg:-bottom-10 -bottom-5 left-10">
                    <img
                        className={'w-full h-full rounded-full'}
                        src="https://media.licdn.com/dms/image/D5603AQHNMd72rqkpWg/profile-displayphoto-shrink_200_200/0/1684225877764?e=1697068800&v=beta&t=Ae1hbDRaKSSIoq9L5OmJnV99P4umkmSpl79pQTsBXsk"
                        alt="Profile"
                    />
                </div>
            </div>
            <div className="info p-10">
                <div className="name">
                    <h1 className={'font-semibold text-4xl'}>Anmol Anand</h1>
                    <p className={'font-light text-gray-600 text-lg'}>
                        anmol@gmail.com
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
                    <a className="p-5 flex items-center gap-8 rounded bg-gray-50 shadow-sm text-lg font-medium cursor-pointer">
                        <Linkedin width={30} height={30} />
                        <p>LinkedIn</p>
                        <div className="ml-auto">
                            <Link />
                        </div>
                    </a>
                    <a className="p-5 flex items-center gap-8 rounded bg-gray-50 shadow-sm text-lg font-medium cursor-pointer">
                        <Github width={30} height={30} />
                        <p>Github</p>
                        <div className="ml-auto">
                            <Link />
                        </div>
                    </a>
                </div>
                <div className="about">
                    <p className=" w-full font-medium text-justify">
                        Hello, I Am Anmol Anand, A Android Developer And A
                        Competitive Programmer. Some Insights About Me - - A
                        Beginner In Flutter Seeking For Internships And Part
                        Time Job Opportunities. - A Java Intermediate, Who As A
                        Strong Grip On The Basics And Now Learning Competitive
                        Programming Techniques In The Language. - Also Have A
                        Basic Knowledge About JavaScript And Golang. To Check
                        Out My Works, Please Dive Into My Github. [ The Link Is
                        Provided In The Profile Section]
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
