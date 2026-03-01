import { useState } from "react"
import './Registration.css'

function Registration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: false,
    })

    const [errors, setErrors] = useState({})

    function handleChange(e) {
        const {name, value, type, checked} = e.target
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })

        if(errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'Имя обязательно';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Фамилия обязательна';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Телефон обязателен';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email обязателен';
        } else if (!formData.email.includes('@')) {
            newErrors.email = 'Введите корректный email';
        }

        if (!formData.password) {
            newErrors.password = 'Пароль обязателен';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Пароль должен быть минимум 6 символов';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
        }

        if (!formData.agree) {
            newErrors.agree = 'Подтвердите пароль';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        
        if (Object.keys(newErrors).length === 0) {
            console.log('Форма отправлена:', formData);
            alert('Форма успешно отправлена!');
            setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            agree: false
            });
        } else {
            setErrors(newErrors);
        }
    };

    return(
        <div className="form-container">
      <h2>Создание аккаунта</h2>
      <p className="subtitle">Введите свои данные, чтобы создать аккаунт в сервисе</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Имя</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Введите имя"
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label>Фамилия</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Введите фамилию"
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>
        </div>

        <div className="form-group">
          <label>Номер телефона</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (999) 999-99-99"
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Пароль</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Введите пароль"
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Повторите пароль</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Повторите пароль"
            className={errors.confirmPassword ? 'error' : ''}
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <span>Подтверждаю пароль</span>
          </label>
          {errors.agree && <span className="error-message">{errors.agree}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Продолжить
        </button>

        <p className="login-link">
          Уже есть аккаунт? <a href="/login">Войти →</a>
        </p>
      </form>
    </div>
    )
}

export default Registration