

export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('No tenemos ningú archivo a subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dskcf8wcl/upload';

    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file', file);

    try {

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        
        if ( !resp.ok ) throw new Error('No se puedo subir imagen')
        const clouResp = await resp.json();

        return clouResp;
        
    } catch (error) {
        console.log( error );
        throw new Error( error.message );
    }
}