import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  return (
    <div className='home'>
      <div className='heading'>
        <h1>Welcome to Learning Space </h1>
        <h2>“Opportunities don’t happen, you create them..”</h2>
      </div>
      <div className='button'>
        <Link to='/add'><button>Register Now</button></Link>
      </div>
      <div className="box">
        <div className="row">
          <div className="col">
            <div className="one"></div>
            <div className="two">
              <img src="https://png.pngtree.com/png-vector/20190621/ourmid/pngtree-datasciencedata-sciencedollar-blue-dotted-line-line-icon-png-image_1489517.jpg" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="three">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldBbrttzPYCgpmW-kLhpXTA4qNjgROC0sIg&usqp=CAU" alt="" />
            </div>
            <div className="four">
              <img src="https://logowik.com/content/uploads/images/flutter5786.jpg" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="para">
              <h3>Our mission is to provide</h3>
              <h1 className='placement'>100% placements</h1>
              <p>
                Our mission is to provide 100% placements to students those who enroll for our specialized courses. Our Placement
                assistance starts with Resume preparation, Mock Interviews by real working professionals, Aptitude test training &
                Interviews. We will provide unlimited placement assistance till the student is placed satisfactorily.
              </p>
                <button className='button'>View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
