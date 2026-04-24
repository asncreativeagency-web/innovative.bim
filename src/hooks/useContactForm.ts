import { useState } from 'react'
import { ContactService } from '../lib/contactService'

interface ContactFormData {
  fullName: string
  email: string
  company: string
  projectType: string
  message: string
}

interface UseContactFormReturn {
  formData: ContactFormData
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Direct Email via Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "8a8c9a08-f812-4282-9435-ddc794cc0825",
          subject: `New Project Inquiry: ${formData.fullName}`,
          from_name: "BIM Arcana Website",
          name: formData.fullName,
          email: formData.email,
          company: formData.company,
          project_type: formData.projectType,
          message: formData.message,
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        resetForm()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      projectType: '',
      message: ''
    })
  }

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
    resetForm
  }
} 