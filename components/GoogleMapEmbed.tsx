"use client"

import React from 'react'

const GoogleMapEmbed: React.FC = () => {
  return (
    <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.8959786895587!2d144.92061142520066!3d-37.536401157337394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad653f7c3e4b2f7%3A0x4895e70aa591a0d6!2sNew%20Era%20Education!5e0!3m2!1sen!2sau!4v1754631303077!5m2!1sen!2sau"
        width="100%"
        height="450"
        style={{
          border: 0,
          width: '100%',
          height: '100%',
          borderRadius: '12px'
        }}
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        title="New Era Education Location"
        aria-label="Google Maps showing New Era Education location in Mickleham"
      />
    </div>
  )
}

export default GoogleMapEmbed