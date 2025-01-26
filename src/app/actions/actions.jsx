"use server"


import { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_8tPpybCJ_4G4KuXbF4tzKJzkcGrBwcL5B');

export const handleSendEmail = async (params,password) => {
	console.log("TCL: handleSendEmail -> params", params)
    
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [params],
            subject: 'Saylani Welfare Loan Application',
            html: `<p>Your password is ${password}</p>`,
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

