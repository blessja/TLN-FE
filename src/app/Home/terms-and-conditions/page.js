import BelowBanner from '../../../Components/Common/BelowBanner';
import PaymentBar from '../../../Components/HomeComp/PaymentBar';
import Sqcomp from './square_comp';

const Terms = () => {
    return(
        <div>
            <div className='flex flex-col justify-center items-center p-8 gap-y-10'>
                <Sqcomp 
                    title="Registeration Fees:"
                    minheight={300}
                    content={
                        <ul className="list-disc pl-6 space-y-6">
                            <li>Please enquire for your interests and we will try our best to accommodate.</li>
                            <li className="text-[#1F9F90]">Registration will be confirmed only after the payment is processed. The course fees can be paid online via UPI/bank transfer/Paytm/Razorpay</li>
                            <li>Anyone aged 9 years or above can register for our courses. The age group 9-15 will be placed in the Junior Batch. Anyone aged 16 years or above will be placed in the Adult Batch.</li>
                            <li className='text-[#1F9F90]'>The Language Network reserves the right to postpone or cancel a batch in case the minimum number of students required for a batch have not registered.</li>
                            <li>The course fee includes all the study material required.</li>
                        </ul>
                    }
                />

                <Sqcomp 
                    title="Attendance:"
                    minheight={300}
                    content={
                        <ul className="list-disc pl-6 space-y-6">
                            <li>Student is expected to attend all the classes regularly. Student is required to maintain a minimum of 75% attendance during the course. If the student fails to maintain minimum attendance, course completion certificate will not be provided.</li>
                            <li className="text-[#1F9F90]">We keep a track of each student’s attendance. In case you are unable to attend class, please try to inform us well in advance. Please NOTE that the teachers will not repeat the portion missed out by a student irrespective of the circumstances. There will be a separate revision class at the end of the course.</li>
                            <li>There will be a separate revision class at the end of the course.</li>
                            <li>It is advised to join the class 5 minutes before the scheduled time.</li>
                            <li>The study material and class link shall be provided to the students 48 hours prior to the start date.</li>
                        </ul>
                    }
                />

                <Sqcomp 
                    title="Certification:"
                    minheight={300}
                    content={
                        <ul className="list-disc pl-6 space-y-6">
                            <li className="text-[#1F9F90]">A certificate of completion by The Language Network will be provided once you clear the final assessment conducted by us.</li>
                            <li>Certificates are issued within 2 weeks of course completion.</li>
                            <li>In case of loss or misplacement of original certificates, issuing a duplicate certificate will incur an additional fee of Rs.500/-.</li>
                            <li>Certificate will be issued via mail.</li>
                            <li>For Hardcopy Certificate a minimal amount of Rs.490 has to be paid.</li>
                        </ul>
                    }
                />

                <Sqcomp
                    title="Change/ Withdrawal of Batch:"
                    minheight={300}
                    content={
                        <ul className="list-disc pl-6 space-y-6">
                            <li>Transfer from one batch to another batch of the same level<span className="text-[#1F9F90]">will only be allowed on payment of Rs. 3000/- on the basis of availability of seats in the preferred batch.</span></li>
                            <li>Fees once paid will<span className='text-[#1F9F90]'> NOT be refunded </span>under any circumstances unless the course is cancelled by The Language Network.</li>
                            <li>Receipts of payment shall be generated within 48 hours after registration and payment.</li>
                        </ul>
                    }
                />

                <Sqcomp
                    title="Online Class Etiquette:"
                    minheight={300}
                    content={
                        <ul className="list-disc pl-6 space-y-6">
                            <li>It is important to recognize that online classroom is in fact a classroom, and certain behaviors are expected when you communicate with both your peers and instructors.</li>
                            <li>The sessions will be conducted on the <span className='text-[#1F9F90]'>Microsoft</span>Teams Try as much as possible to join the class with a stable internet connection.</li>
                            <li>It is strongly recommended to join the class with a PC/MAC/Laptop instead of a mobile device for your own convenience and a smoother learning experience.</li>
                            <li>Try to be in a space with as little background noise as possible to enhance your learning experience.</li>
                            <li>Group batches will commence<span className='text-[#1F9F90]'> within 14 days of your enrolment date. </span>Students will be added to the closest batch date available.</li>
                        </ul>
                    }
                />
            </div>
            {/* Help Section */}
            <div className="flex flex-col items-center bg-[#FAFAFA] py-8 px-4 mb-10 text-center space-y-2">
                <p className="font-bold text-2xl sm:text-3xl md:text-4xl">We&apos;re here to help</p>
                <p className="font-medium text-sm sm:text-base md:text-lg">Get in touch for any queries or specific needs</p>
                <button className="py-2 px-6 bg-primary-color text-white rounded-md text-sm sm:text-base">Contact Us</button>
            </div>
            {/* below banner */}
            <BelowBanner title={"Learning. Simplified."}/>
            {/* payment bar */}
            <PaymentBar/>
        </div>
    );
}

export default Terms;