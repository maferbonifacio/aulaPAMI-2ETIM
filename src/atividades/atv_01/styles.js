import { StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ccb4de',
        padding: 8,
    },
    titulo:{
        //fontsize: 20,
        fontsize: RFValue (22),
        color: '#fafafa',
    },
});

export default styles;