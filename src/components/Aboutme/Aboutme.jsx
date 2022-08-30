import React, { useState, useEffect } from "react"

import "./Aboutme.scss"
// import { urlFor, client } from "../../client"
import profile from "../../assets/aboutme.jpg"

const Aboutme = () => {
  return (
    <>
      <div className="aboutme-container">
        <h2 className="head-text">About</h2>
        {/* <img src="./WechatIMG48.jpeg" alt="BigCo Inc. logo" /> */}
        <div className="aboutme-content">
          <p>
            When I first became a parent, I couldn’t believe how many photos and
            videos I was taking. There were so many firsts—first bath, first
            trip to the park, first time being held by her grandparents—and I
            wanted to capture and save every moment.
          </p>

          <p>
            As a user, I’ve been touched by Niu Niu in unexpected ways. My
            daughters love looking at photos of themselves from when they were
            little. When I look through the album, it reminds me to treasure our
            time together. And for my whole family, it is a constant reassurance
            of our love and support for one another.
          </p>

          <p>
            This summer, my wife’s father passed away. He loved looking at his
            granddaughters’ album, and he would leave the most touching comments
            on their photos and videos.
          </p>

          <p>
            Over time, my daughters’ memories of their grandfather will fade. He
            won’t be here to tell them how much he loves them or how proud he is
            to be their grandfather. But whenever they look at the photos and
            videos they took together or read the comments he made in their
            album, they will be reminded of how much he loved them.
          </p>

          <p>
            Niu Niu has affected my life more than I could have ever imagined.
            And we believe that our app has the power to positively impact the
            lives of families everywhere. I’ll keep working hard to improve our
            app so that we can continue to support families around the world for
            generations to come.
          </p>

          <p>
            <span>Linfeng (Daniel) Chen </span> made this website for the great
            memories with her daughter which allow you to Share, Save, and
            Celebrate Your Child's Journey.
          </p>

          <img
            src={profile}
            // height="400px"

            border="1px"
            width="60%"
            alt="profile"
          />
        </div>
      </div>
      {/* <div>
        <p style="float: left;"></p> */}
    </>
  )
}

export default Aboutme
