import { useState } from 'react'
import './App.css'
import { BaseForm, FormItem } from './commonent/Form';
import 'antd/dist/reset.css';
import { appData } from './data/AppData';

function App() {
  return (
    <div className="App">
      <BaseForm formData={appData} onFinish={values => {
        console.log('提交数据-->', values);
      }} />
    </div>
  )
}

export default App
