import { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from '../../styles/main.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm({buttonText, submitText}) {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data) => {
      setIsReady(true);
      fetch(
       ( `https://api.telegram.org/bot5757903763:AAFwGDbd3hHPqgREmpGNTzbZ6_2erYOmgvg/sendMessage?chat_id=733619142&text=У вас новый запрос на звонок: ${data.phone}`)
      );
    };
    const [isReady, setIsReady] = useState(false);
  return (
    <AnimatePresence>
      {isReady ? (
        <motion.h3 initial={{opacity:'0%'}} animate={{opacity:'100%'}} className={s.contacts__info_title}>{submitText}</motion.h3>
      ) : (
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className={s.contacts__info_form}
            initial={{opacity:'100%'}}
            exit={{opacity:'0%'}}
          >
            <input
              type="phone"
              {...register("phone", {
                required: true,
                minLength: 10,
                maxLength: 14,
              })}
              placeholder={"+380..."}
              className={s.contacts__info_input}
              style={errors["phone"] && { border: "1px solid red" }}
            />
            <button className={s.contacts__info_call + " " + s.btn}>
              {buttonText}
            </button>
          </motion.form>
        
      )}
    </AnimatePresence>
  );
}
