import { useFormik } from "formik";
import * as Yup from 'yup';
import { t } from "i18next";
function AdForm() {
    const formik = useFormik({
        initialValues: {
          type: '',
          licenseNumber: '',
          vision: '',
          address: '',
          propertyType: '',
          phoneNumber: ''
        },
        validationSchema: Yup.object({
          type: Yup.string().required('This field is required'),
          licenseNumber: Yup.string().required('This field is required'),
          vision: Yup.string().required('This field is required'),
          address: Yup.string().required('This field is required'),
          propertyType: Yup.string().required('This field is required'),
          phoneNumber: Yup.string().required('This field is required'),
        }),
        onSubmit: values => {
          console.log(values);
        },
      });
  return (
    <div className="bg-light-sm-bg dark:bg-dark-sm-bg p-4 rounded-lg mt-10 mb-5">
      <h2 className="text-light-blue dark:text-dark-blue mb-4 text-start">{t('Advertise.title')}</h2>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        
        <div className="col-span-1 sm:col-span-2">
          <input
            type="text"
            name="type"
            placeholder={t('Advertise.inputs.Property_Type')}
            className="w-full p-3 border border-gray-300 rounded-2xl dark:bg-[#0D0D0D] dark:text-white dark:border-[#0D0D0D]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.type}
          />
          {formik.touched.type && formik.errors.type ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.type}</div>
          ) : null}
        </div>
        <div className="col-span-1 sm:col-span-2">
          <input
            type="text"
            name="vision"
            placeholder={t('Advertise.inputs.National_identity')}
            className="w-full p-3 border border-gray-300 rounded-2xl dark:bg-[#0D0D0D] dark:text-white dark:border-[#0D0D0D]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.vision}
          />
          {formik.touched.vision && formik.errors.vision ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.vision}</div>
          ) : null}
        </div>

        <div className="col-span-1 sm:col-span-1">
          <input
            type="text"
            name="licenseNumber"
            placeholder={t('Advertise.inputs.License_Number')}
            className="w-full p-3 border border-gray-300 rounded-2xl dark:bg-[#0D0D0D] dark:text-white dark:border-[#0D0D0D]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.licenseNumber}
          />
          {formik.touched.licenseNumber && formik.errors.licenseNumber ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.licenseNumber}</div>
          ) : null}
        </div>

        <div className="col-span-1 sm:col-span-1">
          <input
            type="text"
            name="address"
            placeholder={t('Advertise.inputs.Address_Akar')}
            className="w-full p-3 border border-gray-300 rounded-2xl dark:bg-[#0D0D0D] dark:text-white dark:border-[#0D0D0D]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.address}</div>
          ) : null}
        </div>

        <div className="col-span-1 sm:col-span-1">
          <input
            type="text"
            name="phoneNumber"
            placeholder={t('Advertise.inputs.Phone_number')}
            className="w-full p-3 border border-gray-300 rounded-2xl dark:bg-[#0D0D0D] dark:text-white dark:border-[#0D0D0D]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</div>
          ) : null}
        </div>

        <div className="col-span-1 sm:col-span-1">
          <input
            type="text"
            name="propertyType"
            placeholder={t('Advertise.inputs.Property_Type')}
            className="w-full p-3 border border-gray-300 rounded-2xl dark:bg-[#0D0D0D] dark:text-white dark:border-[#0D0D0D]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.propertyType}
          />
          {formik.touched.propertyType && formik.errors.propertyType ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.propertyType}</div>
          ) : null}
        </div>

        <div className="col-span-1 sm:col-span-1">
          <button
            type="submit"
            className="bg-light-blue dark:bg-dark-blue dark:text-black text-xl w-full text-white px-4 py-2 rounded-xl hover:bg-blue-600"
          >
          {t('Advertise.inputs.Post your ad')}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdForm
