import React, { useState } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function MenuCliente() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement reservation logic
    };

    React.useEffect(() => {
        flatpickr('#date', {
            dateFormat: 'Y-m-d',
            minDate: 'today',
            onChange: (selectedDates) => {
                setDate(selectedDates[0]);
            },
        });
    }, []);

    return (
        <div className="menu-container">
            <h1 className="section-title">Menú para Clientes</h1>

            <div id="current-date-time">
                <p>Fecha: <span>{new Date().toLocaleDateString()}</span></p>
                <p>Hora: <span>{new Date().toLocaleTimeString()}</span></p>
            </div>

            <div className="menu-grid">
                <div className="menu-item" id="calendar-menu-item">
                    <div className="menu-icon">
                        <i className="fas fa-calendar-alt"></i>
                    </div>
                    <h3>Calendario de Eventos</h3>
                    <p>Consulta nuestros próximos eventos.</p>
                </div>
                <div className="menu-item" id="my-reservations-menu-item">
                    <div className="menu-icon" style={{ margin: '0 auto 1rem' }}>
                        <i className="fas fa-history"></i>
                    </div>
                    <h3 style={{ textAlign: 'center' }}>Mis Reservas</h3>
                    <p style={{ textAlign: 'center' }}>Ver tu historial de reservas.</p>
                </div>
                <div className="menu-item" id="reservation-menu-item">
                    <div className="menu-icon">
                        <i className="fas fa-beer"></i>
                    </div>
                    <h3>Reservar Mesa</h3>
                    <p>Reserva una mesa para tu visita.</p>
                </div>
            </div>

            <div id="reservations-history" className="space-y-4" style={{ display: 'none' }}>
                <h2>Historial de Reservas</h2>
                <p>Cargando historial de reservas...</p>
            </div>

            <form id="reservation-form" className="space-y-4" onSubmit={handleSubmit}>
                <h2>Reserva de Mesa</h2>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Ingrese su nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <div id="name-error" className="text-danger">Por favor, ingrese su nombre.</div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Ingrese su correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div id="email-error" className="text-danger">Por favor, ingrese un correo electrónico válido.</div>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Género:</label>
                    <select
                        id="gender"
                        name="gender"
                        className="form-control"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="">Seleccione su género</option>
                        <option value="male">Hombre</option>
                        <option value="female">Mujer</option>
                    </select>
                    <div id="gender-error" className="text-danger">Por favor, seleccione su género.</div>
                </div>
                <div className="form-group" id="guests-group">
                    <label htmlFor="guests">Número de Acompañantes (Mujeres):</label>
                    <input
                        type="number"
                        id="guests"
                        name="guests"
                        className="form-control"
                        placeholder="Ingrese el número de acompañantes"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        min="1"
                        required
                    />
                    <div id="guests-error" className="text-danger">Debe ingresar al menos 5 mujeres.</div>
                    <div id="guests-reminder" className="text-warning" style={{ display: 'none' }}>
                        Recuerda: Si ingresan hombres, deben haber al menos 5 mujeres.
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Fecha de Reserva:</label>
                    <input
                        type="text"
                        id="date"
                        name="date"
                        className="form-control datepicker"
                        placeholder="Seleccione la fecha de reserva"
                        value={date}
                        required
                    />
                    <div id="date-error" className="text-danger">Por favor, seleccione la fecha de reserva.</div>
                </div>
                <div className="form-group">
                    <label htmlFor="time">Hora de Reserva:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        className="form-control"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                    <div id="time-error" className="text-danger">Por favor, seleccione la hora de reserva.</div>
                </div>
                <button type="submit" className="btn btn-primary">Reservar Mesa</button>
                <div id="reservation-message" className="mt-4 text-center text-success" style={{ display: 'none' }}></div>
            </form>
        </div>
    );
}

export default MenuCliente;
