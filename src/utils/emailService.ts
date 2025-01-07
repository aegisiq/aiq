import { TrialSignup, ContactSubmission } from './types';

const WEBHOOK_URL = 'https://hook.eu2.make.com/e3tyi2x6ftkp2d9qi0iz4cqiyjx4n3kf';

async function sendToWebhook(data: any) {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Webhook error:', error);
    throw error;
  }
}

export async function sendTrialSignupNotification(data: TrialSignup) {
  const webhookData = {
    type: 'trial_signup',
    timestamp: new Date().toISOString(),
    data: {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      package: data.package || 'Professional',
      source: 'Website Direct'
    }
  };

  return sendToWebhook(webhookData);
}

export async function sendContactFormNotification(data: ContactSubmission) {
  const webhookData = {
    type: 'contact_form',
    timestamp: new Date().toISOString(),
    data: {
      name: data.name,
      email: data.email,
      message: data.message
    }
  };

  return sendToWebhook(webhookData);
}