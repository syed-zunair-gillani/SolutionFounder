import { FaUserAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import { BiBuilding } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { TiWorld } from 'react-icons/ti';
import { FaRegSun } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaRetweet } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';


export default function form() {
  return (
    <>
      <div className='w-[760px] mx-auto bg-white shadow-lg p-[2%]'>
        <div className='signup_form'>
          <div className='p-2'>
            <ul className='progressbar flex justify-center items-center mb-8'>
              <li className='flex flex-col items-center justify-center w-[10%] text-gray-200'>
                <span className='p-2 bg-gray-200
              rounded-full text-white mb-2'><FaUserAlt /></span>1
              </li>
              <li className='flex flex-col items-center justify-center w-[10%] text-gray-200'>
                <span className='p-2 bg-gray-200
              rounded-full text-white mb-2'><BsFillTelephoneFill /></span>2
              </li>
              <li className='flex flex-col items-center justify-center w-[10%] text-gray-200'>
                <span className='p-2 bg-gray-200
              rounded-full text-white mb-2'><FaEnvelope /></span>3
              </li>
              <li className='flex flex-col items-center justify-center w-[10%] text-gray-200'>
                <span className='p-2 bg-gray-200
              rounded-full text-white mb-2'><BiBuilding /></span>4
              </li>
              <li className='flex flex-col items-center justify-center w-[10%] text-gray-200'>
                <span className='p-2 bg-gray-200
              rounded-full text-white mb-2'><MdLocationOn /></span>5
              </li>
              <li className='flex flex-col items-center justify-center w-[10%] text-gray-200'>
                <span className='p-2 bg-gray-200
              rounded-full text-white mb-2'><TiWorld /></span>6
              </li>
              <li className='flex flex-col items-center justify-center w-[10%] text-gray-200'>
                <span className='p-2 bg-gray-200
              rounded-full text-white mb-2'><FaRegSun /></span>7
              </li>
              <li className='flex flex-col items-center justify-center w-[10%] text-gray-200'>
                <span className='p-2 bg-gray-200
              rounded-full text-white mb-2'><FaUsers /></span>8
              </li>
              <li className='flex flex-col items-center justify-center w-[10%] text-gray-200'>
                <span className='p-2 bg-gray-200
              rounded-full text-white mb-2'><FaRetweet /></span>9
              </li>
              <li className='flex flex-col items-center justify-center w-[10%] text-gray-200'>
                <span className='p-2 bg-gray-200
              rounded-full text-white mb-2'><BsCheckLg /></span>10
              </li>
            </ul>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10%" aria-valuemin="0" aria-valuemax="100" style={{ width: '10%%' }}></div>
            </div>
            <div id='fieldset1'>
              <div className='form-group grid mb-8'>
                <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>Your Name:</label>
                <input type='text' id='first_name' name='first_name' placeholder='Enter Your Name here'
                  className='py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]'></input>
              </div>
              <div className='flex space-x-1 justify-end'>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Next</button>
              </div>
            </div>
            <div id='fieldset2'>
              <div className='form-group grid mb-8'>
                <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>HI USER whats your Phone Number</label>
                <input type='tel' id='phone' name='phone' placeholder='Enter Your Phone '
                  className='py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]'></input>
              </div>
              <div className='flex space-x-1 justify-end'>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Previous</button>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Next</button>
              </div>
            </div>
            <div id='fieldset3'>
              <div className='form-group grid mb-8'>
                <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>And your Email Address</label>
                <input type='email' id='email' name='email' placeholder='Please enter your Email address'
                  className='py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]'></input>
              </div>
              <div className='flex space-x-1 justify-end'>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Previous</button>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Next</button>
              </div>
            </div>
            <div id='fieldset4'>
              <div className='form-group grid md:grid-cols-2 mb-8'>
                <div className='grid justify-between'>
                  <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>Company Name</label>
                  <input type='text' id='company_name' name='company_name' placeholder='Company '
                    className='py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]'></input>
                </div>
                <div className='grid justify-between'>
                  <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>Website</label>
                  <input type='url' id='website' name='website' placeholder='https://company.com '
                    className='py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]'></input>
                </div>
              </div>
              <div className='flex space-x-1 justify-end'>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Previous</button>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Next</button>
              </div>
            </div>
            <div id='fieldset5'>
              <div className='form-group grid md:grid-cols-2 mb-8'>
                <div className='grid justify-between'>
                  <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>City</label>
                  <input type='text' id='city' name='city' placeholder='Lahore '
                    className='py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]'></input>
                </div>
                <div className='grid justify-between'>
                  <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>Country</label>
                  <input type='text' id='country' name='country' placeholder='Pakistan '
                    className='py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]'></input>
                </div>
              </div>
              <div className='flex space-x-1 justify-end'>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Previous</button>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Next</button>
              </div>
            </div>
            <div id='fieldset6'>
              <div className='form-group grid mb-8'>
                <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>Your Industry is:</label>
                <ul>
                  <li><input type='radio' id='manufacturing' name='industryselect' value='Manufacturing'></input>
                    <label for='manufacturing' className='text-base font-medium'> Manufacturing</label>
                  </li>
                  <li>
                    <input type='radio' id='transportation_logistics' name='industryselect' value='Transportation & Logistics'></input>
                    <label for='transportation_logistics' className='text-base font-medium'> Transportation & Logistics</label>
                  </li>
                  <li>
                    <input type='radio' id='custom_clearance' name='industryselect' value='Custom Clearance'></input>
                    <label for='custom_clearance' className='text-base font-medium'> Custom Clearance</label>
                  </li>
                  <li>
                    <input type='radio' id='trading_distribution' name='industryselect' value='Trading and Distribution'></input>
                    <label for='trading_distribution' className='text-base font-medium'> Trading and Distribution</label>
                  </li>
                  <li>
                    <input type='radio' id='restaurants_food_services' name='industryselect' value='Restaurants and Food Services'></input>
                    <label for='restaurants_food_services' className='text-base font-medium'> Restaurants and Food Services</label>
                  </li>
                  <li>
                    <input type='radio' id='construction_contracting' name='industryselect' value='Construction and Contracting'></input>
                    <label for='construction_contracting' className='text-base font-medium'> Construction and Contracting</label>
                  </li>
                  <li>
                    <input type='radio' id='government_semi_government' name='industryselect' value='Government & Semi Government'></input>
                    <label for='government_semi_government' className='text-base font-medium'> Government & Semi Government</label>
                  </li>
                  <li>
                    <input type='radio' id='nonprofit' name='industryselect' value='Nonprofit'></input>
                    <label for='nonprofit' className='text-base font-medium'> Nonprofit</label>
                  </li>
                  <li>
                    <input type='radio' id='retail' name='industryselect' value='retail'></input>
                    <label for='retail' className='text-base font-medium'> Retail</label>
                  </li>
                  <li>
                    <input type='radio' id='education' name='industryselect' value='education'></input>
                    <label for='education' className='text-base font-medium'> Education</label>
                  </li>
                  <li>
                    <input type='radio' id='banking_finance_insurance' name='industryselect' value='Banking, Finance & Insurance'></input>
                    <label for='banking_finance_insurance' className='text-base font-medium'> Banking, Finance & Insurance</label>
                  </li>
                  <li>
                    <input type='radio' id='it_services' name='industryselect' value='IT Services'></input>
                    <label for='it_services' className='text-base font-medium'> IT Services</label>
                  </li>
                  <li>
                    <input type='radio' id='others' name='industryselect' value='Others'></input>
                    <label for='others' className='text-base font-medium'> Others</label>
                  </li>
                </ul>
              </div>
              <div className='flex space-x-1 justify-end'>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Previous</button>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Next</button>
              </div>
            </div>
            <div id='fieldset7'>
              <div className='form-group grid mb-8'>
                <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>Your Buinsess Need is :</label>
                <ul>
                  <li><input type='radio' id='full_erp' name='buinsessneed' value='Full ERP'></input>
                    <label for='full_erp' className='text-base font-medium'> Full ERP</label>
                  </li>
                  <li>
                    <input type='radio' id='hrm_and_payroll' name='buinsessneed' value='HRM and Payroll'></input>
                    <label for='hrm_and_payroll' className='text-base font-medium'> HRM and Payroll</label>
                  </li>
                  <li>
                    <input type='radio' id='finance_and_accounting' name='buinsessneed' value='Finance and Accounting'></input>
                    <label for='finance_and_accounting' className='text-base font-medium'> Finance and Accounting</label>
                  </li>
                  <li>
                    <input type='radio' id='supply_chain_management' name='buinsessneed' value='Supply Chain Management'></input>
                    <label for='supply_chain_management' className='text-base font-medium'> Supply Chain Management</label>
                  </li>
                  <li>
                    <input type='radio' id='project_management' name='buinsessneed' value='Project Management'></input>
                    <label for='project_management' className='text-base font-medium'> Project Management</label>
                  </li>
                  <li>
                    <input type='radio' id='pos' name='buinsessneed' value='POS'></input>
                    <label for='pos' className='text-base font-medium'> POS</label>
                  </li>
                  <li>
                    <input type='radio' id='others' name='industryselect' value='Others'></input>
                    <label for='others' className='text-base font-medium'> Others</label>
                  </li>
                </ul>
              </div>
              <div className='flex space-x-1 justify-end'>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Previous</button>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Next</button>
              </div>
            </div>
            <div id='fieldset8'>
              <div className='form-group grid mb-8'>
                <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>How many users you need</label>
                <input type="text" id='users' name='users' placeholder='10 '
                  className='py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]'></input>
              </div>
              <div className='flex space-x-1 justify-end'>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Previous</button>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Next</button>
              </div>
            </div>
            <div id='fieldset9'>
              <div className='form-group grid mb-8'>
                <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>Have you worked on ERP system before?</label>
                <ul>
                  <li><input type='radio' id='yes_erp' name='erpsystem' value='Yes'></input>
                    <label for='yes_erp' className='text-base font-medium'> Yes</label>
                  </li>
                  <li>
                    <input type='radio' id='no_erp' name='erpsystem' value='No'></input>
                    <label for='no_erp' className='text-base font-medium'> No</label>
                  </li>
                </ul>
                <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>Your Key People Can Speak English?</label>
                <ul>
                  <li><input type='radio' id='yes_english' name='speak' value='Yes'></input>
                    <label for='yes_english' className='text-base font-medium'> Yes</label>
                  </li>
                  <li>
                    <input type='radio' id='no_english' name='speak' value='No'></input>
                    <label for='no_english' className='text-base font-medium'> No</label>
                  </li>
                </ul>
                <label className='text-[#302E2E] text-2xl font-semibold py-5 uppercase'>Do you have an IT team?</label>
                <ul>
                  <li><input type='radio' id='yes_it_team' name='team' value='Yes'></input>
                    <label for='yes_it_team' className='text-base font-medium'> Yes</label>
                  </li>
                  <li>
                    <input type='radio' id='no_it_team' name='team' value='No'></input>
                    <label for='no_it_team' className='text-base font-medium'> No</label>
                  </li>
                </ul>
              </div>
              <div className='flex space-x-1 justify-end'>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Previous</button>
                <button className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Next</button>
              </div>
            </div>
            <div id='fieldset10'>
              <form className='form' id='addEducation' action='#'>
                <div className='form-group grid mb-8'>
                  <input type='hidden' id='p_fname' name='fname'></input>
                  <input type='hidden' id='p_phone' name='phone'></input>
                  <input type='hidden' id='p_email' name='email'></input>
                  <input type='hidden' id='p_company_name' name='company_name'></input>
                  <input type='hidden' id='p_website' name='website'></input>
                  <input type='hidden' id='p_city' name='city'></input>
                  <input type='hidden' id='p_country' name='country'></input>
                  <input type='hidden' id='p_industryselect' name='industryselect'></input>
                  <input type='hidden' id='p_buinsessneed' name='buinsessneed'></input>
                  <input type='hidden' id='p_users' name='users'></input>
                  <input type='hidden' id='p_erpsystem' name='erpsystem'></input>
                  <input type='hidden' id='p_speak' name='speak'></input>
                  <input type='hidden' id='p_team' name='team'></input>
                  <h2 className='text-[#302E2E] text-3xl font-semibold py-5'>You Want to submit this form with this data ?</h2>
                  <ul>
                    <li>Your Name : <span>Name</span></li>
                    <li>Your Number : <span>Number</span></li>
                    <li>Email : <span>Email</span></li>
                    <li>Company Name : <span>Company</span></li>
                    <li>Website : <span>Website</span></li>
                    <li>City : <span>City</span></li>
                    <li>Country : <span>Country</span></li>
                    <li>Your Industry is: <span>Industry</span></li>
                    <li>Your Buinsess Need is : <span>Buinsess</span></li>
                    <li>How many users you need : <span>Users</span></li>
                    <li>Have you worked on ERP system before? : <span>erpsystem</span></li>
                    <li>Your Key People Can Speak English? : <span>Speak</span></li>
                    <li>Do You Have an It Team? : <span>Team</span></li>
                  </ul>
                </div>
                <div className=''>
                  <button type='submit' className='bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
