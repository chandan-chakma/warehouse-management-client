import React from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='w-50 mx-auto my-4'>
            <h2 className='text-center'>Add a <span className='text-info'>Product</span></h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='product name' type='text' {...register('Name')} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Price' type='number' {...register('price')} />
                <input className='mb-3' placeholder='photoURL' type='text' {...register("img")} />

                <input className='btn btn-primary' type="submit" value="Add Product" />
            </form>


        </div>
    );
};

export default AddItems;