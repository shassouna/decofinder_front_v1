import {MapContainer, TileLayer, Popup, CircleMarker} from "react-leaflet"
import "leaflet/dist/leaflet.css"

const Gmap = ({items}) => {
    
    return (
        <MapContainer className="markercluster-map" center={[items[0]['attributes']['LAT'], items[0]['attributes']['LNG']]} zoom={5} maxZoom={30}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
            items.map(item=>(
                item['attributes']['LAT']&&item['attributes']['LNG']&&
                <CircleMarker key={item["id"]} center={[item['attributes']['LAT'], item['attributes']['LNG']]} pathOptions={{ color: 'red' }} radius={7}>
                    <Popup>
                        <span>{item['attributes']['NOM']}</span>
                        <br/>
                        <span>{item['attributes']['ADRESSE']}</span>
                        <br/>
                        {item['attributes']['pay']["data"]&&<span>{item['attributes']['pay']["data"]["attributes"]["LIB"]}</span>}
                    </Popup>
                </CircleMarker>
            )) 
            }
        </MapContainer>
    )
}

export default Gmap