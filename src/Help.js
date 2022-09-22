import './Help.css';

function Help() {
    return (
        <div className='container'>
          <div className='row div'>
            <div className='col-md-5'>
                <br></br><br></br><br></br><br></br><button className='btnn'>DESIGN AGENCY</button>
                <h1>Dedicated to bring your ideas to life</h1>
                <br></br><button className='bttn'>Get started</button>
            </div>
            <div className='col-md-5'>
                <img src='/Images/photo.png' className='img img-fluid' alt='' width={'700px'} height={'500px'} />
            </div>
          </div>
        </div>
    );
}
export default Help;