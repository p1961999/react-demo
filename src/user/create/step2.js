import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';

const Step2 = ({step2formVal}) => {
  const { register, control, handleSubmit, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: 'familyInfo' });
  
  const gender = ['Male', 'Female', 'Other'];

  return (
    <div className='user_box'>
      <h2>Step 2: Family Info</h2>
      <div className='user_form'>
      {fields.map((item, index) => (
        <div className='add_row' key={item.id}>
          <label>
            Family Member<span className="required">*</span>:
            <input {...register(`familyInfo.${index}.name`, { required: 'Name is required' })} />
            {errors.familyInfo?.[index]?.name && (
              <p className="error-message">{errors.familyInfo[index].name.message}</p>
            )}
          </label>
          <label>
            Occupation:
            <input {...register(`familyInfo.${index}.occupation`)} />
          </label>
          <label>
            Gender:
            <select {...register(`familyInfo.${index}.gender`)}>
              {gender.map(option => (
                <option key={option.toLowerCase()} value={option.toLowerCase()}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            Phone Number:
            <input {...register(`familyInfo.${index}.phoneNumber`)} />
          </label>
          {fields.length > 1 && (
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={() => append(step2formVal)}>
        Add More Family Member
      </button>
      </div>
    </div>
  );
};

export default Step2;
