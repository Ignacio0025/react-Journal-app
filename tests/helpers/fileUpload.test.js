import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dskcf8wcl',
    api_key: '949864431733174',
    api_secret: 'HD1NwkDVbJC-W1pKtdM6VBgUe7M',
    secure: true
})

describe('Pruebas en fileUpload', () => {
    
    test('debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D'; 
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');

        // console.log(url);

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg','');
        const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ],{
            resource_type: 'image'
        });
        console.log({ cloudResp });
    });
    
    test('debe de retornar null', async() => {

        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe( null );

    });

});