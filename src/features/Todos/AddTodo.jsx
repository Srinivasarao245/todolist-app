import { Field, Form, Formik } from 'formik';
import React from 'react';
function AddTodo() {
    
  return (
    <div>
      <Formik 
      initialValues={{
        name:String,
        age:Number,
      }}
      onSubmit={(values)=>{
        // EventFn(values)
        console.log(values)
      }}
      >
        <Form>
          <div class='form-floating mb-3 p-2 m-2'>
            <Field type='text' name='name' class='form-control'></Field>
            <label for='name'>Name</label>
          </div>
          <div class='form-floating mb-3 p-2 m-2'>
            <Field type='text' name='age' class='form-control'></Field>
            <label for='age'>Age</label>
          </div>
          <button type='submit' class="btn btn-outline-primary">ADD todo</button>
        </Form>
      </Formik>
    </div>
  ) };
export default AddTodo
