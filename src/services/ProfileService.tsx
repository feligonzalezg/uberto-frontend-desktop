import axios from 'axios'
import { REST_SERVER_URL } from './config';

type UserObject = {
	id: string;
	esChofer: boolean;
}

class ProfileService {

	async getUserProfile(userObject: UserObject): Promise<any> {
		try {
			const userProfile = await axios.get(`${REST_SERVER_URL}/perfil/`, //${userObject.id}
				{
					params: {
					esChofer: false//userObject.esChofer
				}
			}
			);
			return userProfile.data;
		} catch (error) {
			console.error(error);
		}
	}

	
}

const profileService = new ProfileService();

export default profileService;