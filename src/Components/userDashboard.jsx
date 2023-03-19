import '../Styles/userDashBoard.css';
const UserDashBoard = () => {
  return (
    <div className="UserDashBoard">

      <div className="lab">
        <div className="head4">
          <h1>Learning Lab</h1>
        </div>
        <p>The mission of the Library's Learning Lab is to create an environment in which Greenwich Library staff and patrons <br />
          can empower themselves with a practical understanding of current technology.</p>
      </div>




      <div className="block2">
        <div className="bg5">
          <img src="/images/ub1.jpg" width="1000" height="400" alt="" />

        </div>
        <div className="content5">
          <div className="head5">
            <h1>LinkedIn Learning</h1>
          </div>
          <p>LinkedIn Learning (formerly Lynda) is an online educational site that features <br />
            thousands of courses and video tutorials where you can discover,
            complete, and  <br /> track courses related to your industry or interests.</p>

        </div>
      </div>


      

      <div className="block3">
        <img src="/images/ub2.svg" width="100%"  alt="" />
        <div className="content2">
          <h1>Learn Something New or Get Tech Help</h1>
          <p><b>Register on the online calendar. For more information call (203) 622-7920.</b></p>
          <button>view calender 🡲</button>
        </div>
      </div>



    </div>
  );
}

export default UserDashBoard;