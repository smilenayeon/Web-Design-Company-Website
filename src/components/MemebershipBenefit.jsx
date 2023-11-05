import React from 'react'
import MebershipBenefitCard from './MebershipBenefitCard';
import Star from "../assets/images/star.svg";
import CarryingCheck from "../assets/images/carrying-check.svg";
import ThumbsUp from "../assets/images/thumbs-up.svg";
import Money from "../assets/images/money.svg";
import Bubble from "../assets/images/bubble.svg";
import Screen from "../assets/images/screen.svg";


const benefitData= [
    {img:{Star}, title:"Seasoned Pro at your service", content:"With a solid decade in the design biz and big names like Disney, CGV, and Zoos Victoria in the portfolio, you're in for a treat. Expect nothing less than top-drawer, professional designs for your business."},
    {img:{CarryingCheck}, title:"Unlimited Do-Overs & Wishlists", content:"At a single monthly rate, you get to call the shots with unlimited design requests and revisions. Keep tweaking until your design hits the sweet spot. You dream it, we design it!"},
    {img:{ThumbsUp}, title:"Speedy Gonzales", content:"Who likes to wait, right? That's why most design tasks are zoomed over to you within a 48-hour window. Your projects keep zipping along, no pit stops."}, 
    {img:{Money}, title:"Big Bang for your buck", content:"Get agency-level design awesomeness at a price that'll make you do a double-take. For a flat monthly fee, you get high-end design work that would cost you an arm and a leg at old school agencies."},
    {img:{Bubble}, title:"No Meetings … ever", content:"We've cut the fluff and streamlined the process. You share your vision and requirements, and we get to work, resulting in faster turnaround times."},
    {img:{Screen}, title:"Exclusive Access", content:"We limit our service to only a handful of clients per month, ensuring each client receives the personalized attention and quality they deserve. We're not just another design service—we're your dedicated design partner."},
    ]

function MemebershipBenefit() {
  return (
    <div className="membership-benefit-section">
    <h1>Membership benefits</h1>
    <div className="memebership-benefits-table">
    
        {benefitData.map(    ({img,title,content},index) => (<MebershipBenefitCard key={index} img={img} title={title} content={content}/>)   )}
    <MebershipBenefitCard/>

    </div>

    </div>
  )
}

export default MemebershipBenefit;