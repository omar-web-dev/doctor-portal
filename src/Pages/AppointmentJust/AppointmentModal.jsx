import React from 'react';

const AppointmentModal = ({id, title}) => {
    return (
        <>
            <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />

            <div className="modal items-end">
                <div className="modal-box w-full max-w-5xl">
                    <label htmlFor={`my-modal-${id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-left text-lg">{title}</h3>
                    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-100 text-gray-900">
                        <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-1 text-sm">
                                <input type="date" name="date" placeholder="Appointment Date" className="w-full px-4 py-3 rounded-md placeholder:bg-red-400 dark:border-gray-700 bg-gray-100 text-gray-900 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <input type="text" name="time" placeholder="Appointment Time" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-gray-100 text-gray-900 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <input type="text" name="username" placeholder="Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-gray-100 text-gray-900 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <input type="text" name="phone_number" placeholder="Phone Number " className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-gray-100 text-gray-900 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <input type="password" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" />

                            </div>
                            <button className=" w-full p-3 text-center rounded-md text-gray-100 bg-accent">SUBMIT</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;