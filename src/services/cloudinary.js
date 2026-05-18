const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const hasCloudinaryConfig = Boolean(CLOUD_NAME && UPLOAD_PRESET);

/**
 * Faz upload de um arquivo para o Cloudinary usando um unsigned upload preset.
 * Não requer backend — usa a API pública de upload.
 *
 * @param {File} file
 * @param {string} [folder='services'] - Pasta no Cloudinary
 * @returns {Promise<{ url: string, publicId: string }>}
 */
export const uploadToCloudinary = async (file, folder = 'services') => {
    if (!hasCloudinaryConfig) {
        throw new Error(
            'Cloudinary não configurado. Defina VITE_CLOUDINARY_CLOUD_NAME e VITE_CLOUDINARY_UPLOAD_PRESET no arquivo .env.'
        );
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('folder', folder);

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: 'POST', body: formData }
    );

    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(
            err.error?.message || 'Falha ao enviar imagem para o Cloudinary.'
        );
    }

    const data = await response.json();
    return { url: data.secure_url, publicId: data.public_id };
};
