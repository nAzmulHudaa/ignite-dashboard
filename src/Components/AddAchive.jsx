import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddAchive = () => {
    const [imgUrl, setImgUrl] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const eventData= {
            image: imgUrl,
            category: data.category,
        }
        axios.post('http://localhost:5000/api/addAchivement', eventData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    };
    const handleImgUpload = event => {
        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '0ad6173cd5aeb795e482f44abb146bbe')
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url)
                console.log('img sent to db')
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (
        <div className='mt-5 p-3'>
            <h5 className='headingEdit mb-2'>Add Achive Section Images</h5>
            <hr className='dividerEdit'/>
            <div className="col-md-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label htmlFor="image" className='mb-0'>Please Enter Achieve Section Image</label>
                    <input onChange={handleImgUpload} required name='image' id='image' className='form-control mb-2' type='file' placeholder="Please Enter Acvhivement Image " />
                    <label htmlFor="category" className='mb-0'>Please Enter Category</label>
                    <input type="text" name='category' id='category' className='form-control mb-2'  defaultValue='achivement' {...register('category')} />

                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />

                    <button className='submitButton'>Submit</button>
                </form>

            </div>
        </div>

    );
};

export default AddAchive;