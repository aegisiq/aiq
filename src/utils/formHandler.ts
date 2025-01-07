import { TrialSignup, ContactSubmission } from './types';

const WEBHOOK_URL = 'https://hook.eu2.make.com/e3tyi2x6ftkp2d9qi0iz4cqiyjx4n3kf';

interface FormResponse {
  success: boolean;
  message: string;
  data?: any;
}

export async function submitFormData(
  data: TrialSignup | ContactSubmission,
  formType: 'trial' | 'contact'
): Promise<FormResponse> {
  // Validate required fields
  const requiredFields = formType === 'trial' 
    ? ['fullName', 'email', 'phone']
    : ['name', 'email', 'message'];

  const missingFields = requiredFields.filter(field => !data[field as keyof typeof data]);
  if (missingFields.length > 0) {
    return {
      success: false,
      message: `Missing required fields: ${missingFields.join(', ')}`
    };
  }

  // Validate email format
  const emailField = formType === 'trial' ? data.email : (data as ContactSubmission).email;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField)) {
    return {
      success: false,
      message: 'Invalid email format'
    };
  }

  // Prepare payload
  const payload = {
    formType,
    timestamp: new Date().toISOString(),
    data: {
      ...data,
      source: 'Website Form'
    }
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return {
      success: true,
      message: 'Form submitted successfully',
      data: result
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit form'
    };
  }
}

// Usage example:
/*
try {
  const result = await submitFormData({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello!'
  }, 'contact');

  if (result.success) {
    // Handle success
  } else {
    // Handle validation/submission error
  }
} catch (error) {
  // Handle unexpected errors
}
*/