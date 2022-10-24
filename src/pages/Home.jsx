import React from 'react'
import { Link } from 'react-router-dom'
import ProfileImg from '../assets/images/oluwatoyin.jpg'
import Slack from '../assets/images/slack.png'
import Github from '../assets/images/github.png'
import Zuri from '../assets/images/zuri-logo.png'
import I4G from '../assets/images/I4G.png'

const LinkDetails = [
    {
        id: "",
        name : "Twitter Link",
        url: '',
    },
    {
        id: "btn__zuri",
        name : "Zuri Team",
        url: 'training.zuri.team/',
    },
    {
        id: "books",
        name : "Zuri Books",
        url: 'books.zuri.team/',
    },
    {
        id: "book__python",
        name : "Python Books",
        url: 'books.zuri.team/python-for-beginners?ref_id=Oluwatoyin',
    },
    {
        id: "pitch",
        name : "Background Check for Coders",
        url: 'background.zuri.team/',
    },
    {
        id: "book__design",
        name : "Design Books",
        url: 'books.zuri.team/design-rules',
    },

]

const Home = () => {
  return (
    <>
        <div className="container-fluid bg-main-gray py-5">
            <div className="container mx-auto">
                <div className='w-11/12 md:w-4/5 mx-auto'>
                    <div className="head text-center">
                        <img src={ProfileImg} id="profile__img" className="rounded-full mx-auto w-[80px] mb-1" alt="" />
                        <p className='text-primary not-italic font-inter leading-[30px] font-bold text-sm xl:text-xl' id='twitter'>@o_luwatoyin</p>
                        <p className='text-primary not-italic font-inter leading-[30px] font-bold text-sm xl:text-xl hidden' id='slack'>Oluwatoyin</p>
                    </div>
                    <div className="body mt-10">
                        <ul>
                            {
                                LinkDetails.map((eachLink, i) => (
                                    <li className="mb-6">
                                        <Link to={{ pathname: `//${eachLink.url}` }} className='font-inter text-center bg-link-gray py-6 leading-7 text-sm xl:text-lg font-semibold block rounded-lg border-[1px] border-link-gray border-solid h-[70px]'>
                                            <button>
                                                {eachLink.name}
                                            </button>
                                        </Link>
                                    </li>
                                ))
                            } 
                        </ul>

                        <div className='flex gap-3 justify-center py-6'>
                            <span>
                                <Link to='/'>
                                    <img src={Slack} alt="" />
                                </Link>
                            </span>
                            <span>
                                <Link to='/'>
                                    <img src={Github} alt="" />
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div className="bg-white">
            <div className="container mx-auto py-12 mt-8 sm:mt-16 text-center">
                <div className='pt-4 sm:pt-9 flex gap-3 flex-col md:flex-row justify-between  w-[88%] mx-auto border-t border-solid border-link-gray'>
                    <img src={Zuri} className="w-[180px] mx-auto flex-initial" alt="" />
                    <p className='flex-initial mb-1 font-inter text-base font-normal not-italic text-light-gray'>HNG Internship 9 Frontend Task</p>
                    <img src={I4G} className='w-[130px] mx-auto flex-initial' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home