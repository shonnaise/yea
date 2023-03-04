const certificateCategories = [''] as const;
export type CertificateCategory = typeof certificateCategories[number];

export type Certificate = {
    category: CertificateCategory,
    original: Blob,
    optimized: Blob,
};

