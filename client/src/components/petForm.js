import React from 'react';
import {Formik, Field,Form} from "formik";
import * as Yup from "yup";



const Petform = (props) => {

    const {onSubmitProp} = props;

    

    return (
        <div>
            <Formik
        
        initialValues={{
            petName: "",
            petType: "",
            petDescription: "",
            petSkill1:"",
            petSkill2:"",
            petSkill3:"",
        }}

        validationSchema={Yup.object().shape({
            petName: Yup.string()
            .min(2,"Tu nombre es muy corto")
            .max(15,"Tu nombre es muy largo")
            .required("Por favor ingresa un nombre"),
            petType: Yup.string()
            .min(2,"Se requiere tipo de mascota")
            .max(15,"El tipo es muy largo")
            .required("Por favor ingresa un tipo de mascota"),
            petDescription: Yup.string()
            .min(4,"Se requiere una descripcion")
            .max(500,"Descripcion demasiado larga")
            .required("Se necesita la descripcion de la mascota"),
            petSkill1: Yup.string()
            .min(3,"Skill necesita al menos 3 caracteres")
            .max(15,"Skill demasiado larga")
            .required("Se necesita una skill"),
            petSkill2: Yup.string()
            .min(3,"Skill necesita al menos 3 caracteres")
            .max(15,"Skill demasiado larga")
            .required("Se necesita una skill"),
            petSkill3: Yup.string()
            .min(3,"Skill necesita al menos 3 caracteres")
            .max(15,"Skill demasiado larga")
            .required("Se necesita una skill"),

        })}

        onSubmit={(values,{setSubmitting})=>{
            onSubmitProp(values);
            console.log(values);
        }}

        >
            {({errors,
            touched,
            handleSubmit})=>{

                return (
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <label htmlFor='petName'>Name : </label>
                            <Field id="petName" type="text" placeholder="Name" name="petName" className="form-control" />
                            {errors.petName && touched.petName && <p className='error'>{errors.petName} </p>}

                            <label htmlFor='petType'>Type : </label>
                            <Field id="petType" type="text" placeholder="Type" name="petType" className="form-control" />
                            {errors.petType && touched.petType && <p className='error'>{errors.petType} </p>}

                            <label htmlFor='petDescription'>Description : </label>
                            <Field id="petDescription" type="text" placeholder="Description" name="petDescription" className="form-control" />
                            {errors.petDescription && touched.petDescription && <p className='error'>{errors.petDescription} </p>}

                            <label htmlFor='petSkill1'>skill 1 : </label>
                            <Field id="petSkill1" type="text" placeholder="petSkill1" name="petSkill1" className="form-control" />
                            {errors.petSkill1 && touched.petSkill1 && <p className='error'>{errors.petSkill1} </p>}

                            <label htmlFor='petSkill2'>skill 2 : </label>
                            <Field id="petSkill2" type="text" placeholder="petSkill2" name="petSkill2" className="form-control" />
                            {errors.petSkill2 && touched.petSkill2 && <p className='error'>{errors.petSkill2} </p>}

                            <label htmlFor='petSkill3'> skill 3 : </label>
                            <Field id="petSkill3" type="text" placeholder="petSkill3" name="petSkill3" className="form-control" />
                            {errors.petSkill3 && touched.petSkill3 && <p className='error'>{errors.petSkill3} </p>}
                            <br></br>
                            <button type="submit" disabled={Object.values(errors).length>0} className="btn btn-primary m-3">Enviar</button>
                        </Form>
                    </div>
                )

            }}

        </Formik>
        </div>
    );
}

export default Petform;
