import { useState } from 'react'
import { NewsletterService } from '../lib/newsletterService'

interface UseNewsletterFormReturn {
  email: string
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
}

export const useNewsletterForm = (): UseNewsletterFormReturn => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const result = await NewsletterService.subscribe(email.trim())
      
      if (result.success) {
        setSubmitStatus('success')
        // Don't reset form immediately - let user see success message
        // resetForm()
      } else {
        setSubmitStatus('error')
        console.error('Newsletter subscription error:', result.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Unexpected error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setEmail('')
    setSubmitStatus('idle')
  }

  return {
    email,
    isSubmitting,
    submitStatus,
    handleEmailChange,
    handleSubmit,
    resetForm
  }
} 