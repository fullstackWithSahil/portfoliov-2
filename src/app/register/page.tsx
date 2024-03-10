"use client"
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Otp from './Otp';

export default function Page() {
  const [formData, setFormData] = useState({
    username: '',
    middlename: '',
    lastname: '',
    email: '',
    password: '',
  });

  const [step, setStep] = useState(1);
  
  const handleChange = (field:string, value:string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const nextStep = () => {
    setStep(prev=>prev+1);
  };
  
  return (
    <main className='dark:bg-gray-700 bg-gradient-to-tr from-indigo-700 to-blue-400 dark:from-gray-700 dark:to-gray-700 h-[100vh] sm:h-[90vh] flex justify-center items-center'>
      <div className='w-[clac(100%-1rem)] sm:w-1/2 text-black dark:text-white bg-white dark:bg-gray-600 mx-2 p-10 rounded-lg border-2 border-black shadow-2xl dark:border-white'>
        <Progress value={step*25}/>
        {step==1&&<Step1 
          username={formData.username} 
          middlename={formData.middlename} 
          lastname={formData.lastname}
          handleChange={handleChange}
          nextStep={nextStep}
        />}
        {step==2&&<Step2
          password={formData.password} 
          onChange={handleChange}
          nextStep={nextStep}
        />}
        {step==3&&<Step3 
          email={formData.email} 
          onChange={handleChange} 
          nextStep={nextStep}
        />}
        {step==4&&<Otp {...formData}/>}
      </div>
    </main>
  )
}