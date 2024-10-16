import React from 'react'

const MouseScroll = () => {
  return (
    <div className="lg:hidden absolute bottom-10 left-50 w-full z-30">
      <div className="mouse_scroll">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="m_scroll_arrows unu"></span>
          <span className="m_scroll_arrows doi"></span>
          <span className="m_scroll_arrows trei"></span>
        </div>
      </div>
    </div>
  );
}

export default MouseScroll
