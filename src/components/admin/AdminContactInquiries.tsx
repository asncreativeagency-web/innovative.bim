import React, { useState, useEffect } from 'react'
import { ContactService, ContactInquiry } from '../lib/contactService'

const AdminContactInquiries: React.FC = () => {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadInquiries()
  }, [])

  const loadInquiries = async () => {
    try {
      setLoading(true)
      const result = await ContactService.getInquiries()
      
      if (result.success && result.data) {
        setInquiries(result.data)
      } else {
        setError(result.error || 'Failed to load inquiries')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, newStatus: ContactInquiry['status']) => {
    try {
      const result = await ContactService.updateInquiryStatus(id, newStatus)
      
      if (result.success) {
        // Update local state
        setInquiries(prev => 
          prev.map(inquiry => 
            inquiry.id === id 
              ? { ...inquiry, status: newStatus }
              : inquiry
          )
        )
      } else {
        alert(`Failed to update status: ${result.error}`)
      }
    } catch (err) {
      alert('Failed to update status')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500 text-white'
      case 'read': return 'bg-yellow-500 text-white'
      case 'replied': return 'bg-green-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading inquiries...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Contact Inquiries</h1>
            <p className="text-gray-600 mt-1">Manage and respond to contact form submissions</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {inquiry.first_name} {inquiry.last_name}
                        </div>
                        <div className="text-sm text-gray-500">{inquiry.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {inquiry.company || 'N/A'}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">
                        {inquiry.message}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(inquiry.status || 'new')}`}>
                        {inquiry.status || 'new'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {inquiry.created_at ? new Date(inquiry.created_at).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <select
                        value={inquiry.status || 'new'}
                        onChange={(e) => updateStatus(inquiry.id!, e.target.value as ContactInquiry['status'])}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                      >
                        <option value="new">New</option>
                        <option value="read">Read</option>
                        <option value="replied">Replied</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {inquiries.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No contact inquiries yet</div>
              <div className="text-gray-400 text-sm mt-2">New submissions will appear here</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminContactInquiries 