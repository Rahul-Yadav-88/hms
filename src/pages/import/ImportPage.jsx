import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Upload, FileSpreadsheet, AlertCircle, Download, CheckCircle, XCircle, FileText, RotateCcw } from 'lucide-react';

const ImportPage = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [importing, setImporting] = useState(false);
  const [importStatus, setImportStatus] = useState(null); // 'success', 'error', 'validating'
  const [validationResults, setValidationResults] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setImportStatus(null);
      setValidationResults(null);
    }
  };

  const handleDryRun = () => {
    setImporting(true);
    setImportStatus('validating');
    
    // Simulate validation
    setTimeout(() => {
      setValidationResults({
        total: 150,
        valid: 142,
        errors: 8,
        warnings: 15,
        errorDetails: [
          { row: 5, field: 'email', message: 'Invalid email format' },
          { row: 12, field: 'phone', message: 'Phone number required' },
          { row: 23, field: 'roll_number', message: 'Duplicate roll number' },
          { row: 45, field: 'email', message: 'Email already exists' },
        ]
      });
      setImporting(false);
      setImportStatus('validated');
    }, 2000);
  };

  const handleImport = () => {
    setImporting(true);
    
    // Simulate import
    setTimeout(() => {
      setImportStatus('success');
      setImporting(false);
    }, 3000);
  };

  const handleReset = () => {
    setFile(null);
    setImportStatus(null);
    setValidationResults(null);
    setImporting(false);
  };

  return (
    <DashboardLayout title="CSV Bulk Import">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Instructions Card */}
        <div style={{
          backgroundColor: '#DBEAFE',
          border: '1px solid #93C5FD',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '24px',
          display: 'flex',
          gap: '16px'
        }}>
          <FileText style={{ color: '#1E40AF', flexShrink: 0 }} size={24} />
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1E3A8A',
              marginBottom: '8px'
            }}>
              CSV Import Instructions
            </h3>
            <ul style={{
              fontSize: '14px',
              color: '#1E40AF',
              marginLeft: '20px',
              lineHeight: '1.8'
            }}>
              <li>Your CSV must include these columns: <strong>name, email, roll_number, course, gender</strong></li>
              <li>Use comma (,) as delimiter</li>
              <li>First row should contain column headers</li>
              <li>Maximum file size: 10MB</li>
              <li>Supported format: .csv only</li>
            </ul>
            <button style={{
              marginTop: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              <Download size={16} />
              Download Sample CSV
            </button>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: file ? '1fr 1fr' : '1fr',
          gap: '24px'
        }}>
          
          {/* Upload Section */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            padding: '32px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <FileSpreadsheet style={{
                color: '#C9A24C',
                margin: '0 auto 16px'
              }} size={64} />
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '8px'
              }}>
                Import Students
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6B7280'
              }}>
                Upload a CSV file to bulk import student data
              </p>
            </div>

            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              style={{
                border: dragActive ? '2px dashed #C9A24C' : '2px dashed #D1D5DB',
                borderRadius: '12px',
                padding: '48px 24px',
                textAlign: 'center',
                backgroundColor: dragActive ? '#FBF5EB' : '#F9FAFB',
                transition: 'all 0.2s',
                cursor: 'pointer'
              }}
            >
              <Upload style={{
                color: dragActive ? '#C9A24C' : '#9CA3AF',
                margin: '0 auto 16px'
              }} size={48} />
              <p style={{
                fontSize: '16px',
                color: '#374151',
                marginBottom: '8px',
                fontWeight: '500'
              }}>
                {dragActive ? 'Drop your file here' : 'Drag and drop your CSV file here'}
              </p>
              <p style={{
                fontSize: '14px',
                color: '#9CA3AF',
                marginBottom: '16px'
              }}>
                or
              </p>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="csv-upload"
              />
              <label
                htmlFor="csv-upload"
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  backgroundColor: '#C9A24C',
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#A88840'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#C9A24C'}
              >
                Browse Files
              </label>
            </div>

            {file && (
              <div style={{
                marginTop: '24px',
                padding: '16px',
                backgroundColor: '#F0F9FF',
                borderRadius: '8px',
                border: '1px solid #BAE6FD'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FileSpreadsheet style={{ color: '#0284C7' }} size={24} />
                    <div>
                      <p style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#0C4A6E'
                      }}>
                        {file.name}
                      </p>
                      <p style={{
                        fontSize: '12px',
                        color: '#0369A1'
                      }}>
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleReset}
                    style={{
                      padding: '6px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#0284C7'
                    }}
                  >
                    <XCircle size={20} />
                  </button>
                </div>

                {!importStatus && (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={handleDryRun}
                      disabled={importing}
                      style={{
                        flex: 1,
                        padding: '10px',
                        backgroundColor: importing ? '#D1D5DB' : '#3B82F6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: importing ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {importing ? 'Validating...' : 'Validate (Dry Run)'}
                    </button>
                  </div>
                )}

                {importStatus === 'validated' && (
                  <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                    <button
                      onClick={handleImport}
                      disabled={importing || validationResults?.errors > 0}
                      style={{
                        flex: 1,
                        padding: '10px',
                        backgroundColor: (importing || validationResults?.errors > 0) ? '#D1D5DB' : '#10B981',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: (importing || validationResults?.errors > 0) ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {importing ? 'Importing...' : 'Confirm Import'}
                    </button>
                    <button
                      onClick={handleReset}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: '#EF4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <RotateCcw size={16} />
                      Reset
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Validation Results */}
          {file && validationResults && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              padding: '24px'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '20px'
              }}>
                Validation Results
              </h3>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{
                  padding: '16px',
                  backgroundColor: '#F0F9FF',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '12px', color: '#0369A1', marginBottom: '4px' }}>
                    Total Rows
                  </p>
                  <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#0284C7' }}>
                    {validationResults.total}
                  </p>
                </div>
                <div style={{
                  padding: '16px',
                  backgroundColor: '#D1FAE5',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '12px', color: '#065F46', marginBottom: '4px' }}>
                    Valid
                  </p>
                  <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#10B981' }}>
                    {validationResults.valid}
                  </p>
                </div>
                <div style={{
                  padding: '16px',
                  backgroundColor: '#FEE2E2',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '12px', color: '#991B1B', marginBottom: '4px' }}>
                    Errors
                  </p>
                  <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#EF4444' }}>
                    {validationResults.errors}
                  </p>
                </div>
                <div style={{
                  padding: '16px',
                  backgroundColor: '#FEF3C7',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '12px', color: '#92400E', marginBottom: '4px' }}>
                    Warnings
                  </p>
                  <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#F59E0B' }}>
                    {validationResults.warnings}
                  </p>
                </div>
              </div>

              {/* Error Details */}
              {validationResults.errors > 0 && (
                <div>
                  <h4 style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1F2937',
                    marginBottom: '12px'
                  }}>
                    Error Details
                  </h4>
                  <div style={{
                    maxHeight: '300px',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    {validationResults.errorDetails.map((error, idx) => (
                      <div key={idx} style={{
                        padding: '12px',
                        backgroundColor: '#FEF2F2',
                        border: '1px solid #FCA5A5',
                        borderRadius: '6px'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: '8px'
                        }}>
                          <XCircle style={{
                            color: '#DC2626',
                            flexShrink: 0,
                            marginTop: '2px'
                          }} size={16} />
                          <div style={{ flex: 1 }}>
                            <p style={{
                              fontSize: '13px',
                              fontWeight: '600',
                              color: '#7F1D1D',
                              marginBottom: '2px'
                            }}>
                              Row {error.row} - {error.field}
                            </p>
                            <p style={{
                              fontSize: '12px',
                              color: '#991B1B'
                            }}>
                              {error.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {validationResults.errors === 0 && (
                <div style={{
                  padding: '16px',
                  backgroundColor: '#D1FAE5',
                  border: '1px solid #6EE7B7',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <CheckCircle style={{ color: '#059669' }} size={24} />
                  <div>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#065F46',
                      marginBottom: '2px'
                    }}>
                      Ready to Import
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: '#047857'
                    }}>
                      All validations passed. Click "Confirm Import" to proceed.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Success Message */}
          {importStatus === 'success' && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              padding: '48px 24px',
              textAlign: 'center'
            }}>
              <CheckCircle style={{
                color: '#10B981',
                margin: '0 auto 16px'
              }} size={64} />
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#065F46',
                marginBottom: '8px'
              }}>
                Import Successful!
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#047857',
                marginBottom: '24px'
              }}>
                {validationResults.valid} students have been imported successfully.
              </p>
              <button
                onClick={handleReset}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#C9A24C',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Import Another File
              </button>
            </div>
          )}
        </div>

        {/* Warning Box */}
        <div style={{
          marginTop: '24px',
          backgroundColor: '#FEF3C7',
          border: '1px solid #FCD34D',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          gap: '12px'
        }}>
          <AlertCircle style={{
            color: '#D97706',
            flexShrink: 0
          }} size={20} />
          <div style={{ fontSize: '14px', color: '#78350F' }}>
            <strong>Important:</strong> Always run a dry-run validation before importing. This helps identify issues without making any changes to your database. You can rollback an import within 24 hours if needed.
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ImportPage;