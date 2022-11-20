import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
} from "react-native-maps";

//polygon coordinates for each neighbourhood

export default class Neighbourhoods extends Component {
  state = {
    UpperEastSide: [
      { name: "1", longitude: -73.9556746, latitude: 40.7878351 },
      { name: "2", longitude: -73.9729695, latitude: 40.7642737 },
      { name: "3", longitude: -73.9590006, latitude: 40.7583415 },
      { name: "4", longitude: -73.9586572, latitude: 40.7588453 },
      { name: "5", longitude: -73.9557175, latitude: 40.7613158 },
      { name: "6", longitude: -73.9461689, latitude: 40.7716193 },
      { name: "7", longitude: -73.9437442, latitude: 40.7738781 },
      { name: "8", longitude: -73.9424996, latitude: 40.7761042 },
      { name: "9", longitude: -73.9445381, latitude: 40.7819049 },
      { name: "10", longitude: -73.9440231, latitude: 40.7829448 },
      { name: "11", longitude: -73.9556746, latitude: 40.7878351 },
    ],

    UpperWestSide: [
      { name: "1", longitude: -73.9583754, latitude: 40.8006356 },
      { name: "2", longitude: -73.9709757, latitude: 40.8059518 },
      { name: "3", longitude: -73.9936994, latitude: 40.773005 },
      { name: "4", longitude: -73.9818548, latitude: 40.7680649 },
      { name: "5", longitude: -73.9583754, latitude: 40.8006356 },
    ],
    MidtownWest: [
      { name: "1", longitude: -73.9729695, latitude: 40.7642737 },
      { name: "2", longitude: -73.9936994, latitude: 40.773005 },
      { name: "3", longitude: -73.9949266, latitude: 40.7712232 },
      { name: "4", longitude: -73.9951412, latitude: 40.7695981 },
      { name: "5", longitude: -74.0000765, latitude: 40.763195 },
      { name: "6", longitude: -74.0017931, latitude: 40.7618623 },
      { name: "7", longitude: -74.0051405, latitude: 40.7571489 },
      { name: "8", longitude: -73.9845411, latitude: 40.7484037 },
      { name: "9", longitude: -73.9729695, latitude: 40.7642737 },
    ],
    MidtownEast: [
      { name: "1", longitude: -73.9729695, latitude: 40.7642737 },
      { name: "1", longitude: -73.9845411, latitude: 40.7484037 },
      { name: "1", longitude: -73.9720685, latitude: 40.7432053 },
      { name: "1", longitude: -73.9623696, latitude: 40.7547794 },
      { name: "1", longitude: -73.9610392, latitude: 40.7556572 },
      { name: "1", longitude: -73.9590006, latitude: 40.7583415 },
      { name: "1", longitude: -73.9729695, latitude: 40.7642737 },
    ],
    Chelsea: [
      { name: "1", longitude: -73.9878066, latitude: 40.7497359 },
      { name: "1", longitude: -74.0051405, latitude: 40.7571489 },
      { name: "1", longitude: -74.0072902, latitude: 40.7541898 },
      { name: "1", longitude: -74.0085776, latitude: 40.7500285 },
      { name: "1", longitude: -74.0078481, latitude: 40.7483379 },
      { name: "1", longitude: -74.0087493, latitude: 40.7423229 },
      { name: "1", longitude: -73.9968188, latitude: 40.7373154 },
      { name: "1", longitude: -73.9878066, latitude: 40.7497359 },
    ],
    Gramercy: [
      { name: "1", longitude: -73.9878066, latitude: 40.7497359 },
      { name: "1", longitude: -73.9968188, latitude: 40.7373154 },
      { name: "1", longitude: -73.9719875, latitude: 40.7268028 },
      { name: "1", longitude: -73.9718159, latitude: 40.7293721 },
      { name: "1", longitude: -73.9739187, latitude: 40.7310632 },
      { name: "1", longitude: -73.9750774, latitude: 40.7365914 },
      { name: "1", longitude: -73.9730604, latitude: 40.7394204 },
      { name: "1", longitude: -73.9720685, latitude: 40.7432053 },
      { name: "1", longitude: -73.9878066, latitude: 40.7497359 },
    ],
    GreenwichVillage: [
      { name: "1", longitude: -73.9968188, latitude: 40.7373154 },
      { name: "1", longitude: -74.0087493, latitude: 40.7423229 },
      { name: "1", longitude: -74.0094719, latitude: 40.7405363 },
      { name: "1", longitude: -74.0102014, latitude: 40.7392682 },
      { name: "1", longitude: -74.0100941, latitude: 40.7376261 },
      { name: "1", longitude: -74.0108452, latitude: 40.7291223 },
      { name: "1", longitude: -74.0028198, latitude: 40.7283907 },
      { name: "1", longitude: -73.9968118, latitude: 40.7254148 },
      { name: "1", longitude: -73.9915118, latitude: 40.7317077 },
      { name: "1", longitude: -73.9907963, latitude: 40.7347392 },
      { name: "1", longitude: -73.9968188, latitude: 40.7373154 },
    ],
    EastVillage: [
      { name: "1", longitude: -73.9719875, latitude: 40.7268028 },
      { name: "1", longitude: -73.9907963, latitude: 40.7347392 },
      { name: "1", longitude: -73.9915118, latitude: 40.7317077 },
      { name: "1", longitude: -73.9923788, latitude: 40.730572 },
      { name: "1", longitude: -73.9899005, latitude: 40.7295638 },
      { name: "1", longitude: -73.991596, latitude: 40.7272272 },
      { name: "1", longitude: -73.9925186, latitude: 40.7241212 },
      { name: "1", longitude: -73.9787214, latitude: 40.719893 },
      { name: "1", longitude: -73.9772193, latitude: 40.7193075 },
      { name: "1", longitude: -73.9738075, latitude: 40.7184131 },
      { name: "1", longitude: -73.9726917, latitude: 40.7220234 },
      { name: "1", longitude: -73.9719875, latitude: 40.7268028 },
    ],
    Noho: [
      { name: "1", longitude: -73.9968118, latitude: 40.7254148 },
      { name: "1", longitude: -73.9925186, latitude: 40.7241212 },
      { name: "1", longitude: -73.991596, latitude: 40.7272272 },
      { name: "1", longitude: -73.9899005, latitude: 40.7295638 },
      { name: "1", longitude: -73.9923788, latitude: 40.730572 },
      { name: "1", longitude: -73.9968118, latitude: 40.7254148 },
    ],
    Tribeca: [
      { name: "1", longitude: -74.0112166, latitude: 40.7258884 },
      { name: "1", longitude: -74.0131263, latitude: 40.7172693 },
      { name: "1", longitude: -74.0063243, latitude: 40.7141791 },
      { name: "1", longitude: -74.0018182, latitude: 40.7193348 },
      { name: "1", longitude: -74.0112166, latitude: 40.7258884 },
    ],
    Soho: [
      { name: "1", longitude: -74.0028084, latitude: 40.7282822 },
      { name: "1", longitude: -74.0108452, latitude: 40.7291223 },
      { name: "1", longitude: -74.0112166, latitude: 40.7258884 },
      { name: "1", longitude: -74.0054906, latitude: 40.7219402 },
      { name: "1", longitude: -74.0012205, latitude: 40.7189478 },
      { name: "1", longitude: -73.9958561, latitude: 40.7251275 },
      { name: "1", longitude: -73.9968118, latitude: 40.7254148 },
      { name: "1", longitude: -74.0028084, latitude: 40.7282822 },
    ],
    LowerEastSide: [
      { name: "1", longitude: -73.9737217, latitude: 40.7184131 },
      { name: "1", longitude: -73.9771335, latitude: 40.7193075 },
      { name: "1", longitude: -73.9786356, latitude: 40.719893 },
      { name: "1", longitude: -73.9924328, latitude: 40.7241212 },
      { name: "1", longitude: -73.9953324, latitude: 40.7158546 },
      { name: "1", longitude: -73.9917919, latitude: 40.7095764 },
      { name: "1", longitude: -73.9786598, latitude: 40.7111216 },
      { name: "1", longitude: -73.9761493, latitude: 40.7147161 },
      { name: "1", longitude: -73.9737217, latitude: 40.7184131 },
    ],
    Nolita: [
      { name: "1", longitude: -73.9958561, latitude: 40.7251275 },
      { name: "1", longitude: -73.9998693, latitude: 40.7204619 },
      { name: "1", longitude: -73.9980936, latitude: 40.7195716 },
      { name: "1", longitude: -73.99458, latitude: 40.7183396 },
      { name: "1", longitude: -73.9925186, latitude: 40.7241212 },
      { name: "1", longitude: -73.9958561, latitude: 40.7251275 },
    ],
    Chinatown: [
      { name: "1", longitude: -73.9938698, latitude: 40.7130908 },
      { name: "1", longitude: -73.9954182, latitude: 40.7158546 },
      { name: "1", longitude: -73.99458, latitude: 40.7183396 },
      { name: "1", longitude: -73.9980936, latitude: 40.7195716 },
      { name: "1", longitude: -73.9998693, latitude: 40.7204619 },
      { name: "1", longitude: -74.0012205, latitude: 40.7189478 },
      { name: "1", longitude: -74.0018182, latitude: 40.7193348 },
      { name: "1", longitude: -74.0044484, latitude: 40.7162461 },
      { name: "1", longitude: -73.9986549, latitude: 40.71353 },
      { name: "1", longitude: -73.9979468, latitude: 40.7127249 },
      { name: "1", longitude: -73.9938698, latitude: 40.7130908 },
    ],
    FinancialDistrict: [
      { name: "1", longitude: -73.999432, latitude: 40.7079947 },
      { name: "1", longitude: -73.997511, latitude: 40.7087287 },
      { name: "1", longitude: -73.9918777, latitude: 40.7095764 },
      { name: "1", longitude: -73.9938698, latitude: 40.7130908 },
      { name: "1", longitude: -73.9979468, latitude: 40.7127249 },
      { name: "1", longitude: -73.9986549, latitude: 40.71353 },
      { name: "1", longitude: -74.0044484, latitude: 40.7162461 },
      { name: "1", longitude: -74.0063243, latitude: 40.7141791 },
      { name: "1", longitude: -74.0131263, latitude: 40.7172693 },
      { name: "1", longitude: -74.01692, latitude: 40.7048878 },
      { name: "1", longitude: -74.0144094, latitude: 40.7045788 },
      { name: "1", longitude: -74.0144524, latitude: 40.7031473 },
      { name: "1", longitude: -74.0137872, latitude: 40.7023177 },
      { name: "1", longitude: -74.012843, latitude: 40.7023014 },
      { name: "1", longitude: -74.0124353, latitude: 40.7012928 },
      { name: "1", longitude: -74.0090665, latitude: 40.7019273 },
      { name: "1", longitude: -73.999432, latitude: 40.7079947 },
    ],
    BatteryPark: [
      { name: "1", longitude: -74.0129536, latitude: 40.7182644 },
      { name: "1", longitude: -74.0166443, latitude: 40.7186222 },
      { name: "1", longitude: -74.0175455, latitude: 40.7135479 },
      { name: "1", longitude: -74.0163439, latitude: 40.7133202 },
      { name: "1", longitude: -74.0166443, latitude: 40.7122142 },
      { name: "1", longitude: -74.0177601, latitude: 40.7123443 },
      { name: "1", longitude: -74.0187901, latitude: 40.7078551 },
      { name: "1", longitude: -74.0181034, latitude: 40.7076924 },
      { name: "1", longitude: -74.0185326, latitude: 40.7068791 },
      { name: "1", longitude: -74.0191763, latitude: 40.7068791 },
      { name: "1", longitude: -74.0193909, latitude: 40.7060007 },
      { name: "1", longitude: -74.0184896, latitude: 40.7040487 },
      { name: "1", longitude: -74.0151852, latitude: 40.7008278 },
      { name: "1", longitude: -74.0132111, latitude: 40.7004049 },
      { name: "1", longitude: -74.0111082, latitude: 40.7008604 },
      { name: "1", longitude: -74.011194, latitude: 40.7014785 },
      { name: "1", longitude: -74.0124353, latitude: 40.7012928 },
      { name: "1", longitude: -74.012843, latitude: 40.7023014 },
      { name: "1", longitude: -74.0137872, latitude: 40.7023177 },
      { name: "1", longitude: -74.0144524, latitude: 40.7031473 },
      { name: "1", longitude: -74.0144094, latitude: 40.7045788 },
      { name: "1", longitude: -74.01692, latitude: 40.7048878 },
      { name: "1", longitude: -74.0129536, latitude: 40.7182644 },
    ],

    ClassicRoute: [
      { name: "Central Park", longitude: -73.9665138, latitude: 40.7812199 },
      {
        name: "Rockefeller Center",
        longitude: -73.9786736,
        latitude: 40.7587402,
      },
      {
        name: "The Metropolitan Museum of Art",
        longitude: -73.963244,
        latitude: 40.7794366,
      },
      { name: "Theater District", longitude: -73.9844722, latitude: 40.759011 },
      {
        name: "Empire State Building",
        longitude: -73.98566439999999,
        latitude: 40.7484405,
      },
      {
        name: "9/11 Memorial Pools",
        longitude: -74.0124786,
        latitude: 40.7114147,
      },
      { name: "The High Line", longitude: -74.0047649, latitude: 40.7479925 },
      {
        name: "American Museum of Natural History",
        longitude: -73.9739882,
        latitude: 40.78132409999999,
      },
      { name: "Times Square", longitude: -73.9855426, latitude: 40.7579747 },
      {
        name: "Grand Central Terminal",
        longitude: -73.97683239999999,
        latitude: 40.7529456,
      },
      {
        name: "Lincoln Center for the Performing Arts",
        longitude: -73.9834889,
        latitude: 40.7724641,
      },
      {
        name: "One World Observatory",
        longitude: -74.013173,
        latitude: 40.7130062,
      },
      {
        name: "New York Public Library",
        longitude: -73.9822534,
        latitude: 40.75318230000001,
      },
      {
        name: "Radio City Music Hall",
        longitude: -73.9799772,
        latitude: 40.75997599999999,
      },
      {
        name: "St. Patricks Cathedral",
        longitude: -73.9761953,
        latitude: 40.7586117,
      },
      {
        name: "Carnegie Hall",
        longitude: -73.97992359999999,
        latitude: 40.7651258,
      },
      {
        name: "Statue of Liberty Viewpoint",
        longitude: -74.0151612,
        latitude: 40.70092359999999,
      },
    ],
    PopCultureRoute: [
      {
        name: "Bubba Gump Shrimp Co.",
        longitude: -73.9863737,
        latitude: 40.7572071,
      },
      { name: "Hard Rock Cafe", longitude: -73.9866112, latitude: 40.7570352 },
      {
        name: "Planet Hollywood",
        longitude: -73.9851237,
        latitude: 40.7579436,
      },
      {
        name: "Madame Tussauds New York",
        longitude: -73.9888338,
        latitude: 40.7564269,
      },
      { name: "Disney Store", longitude: -73.9848988, latitude: 40.7578396 },
      {
        name: "Hershey's Chocolate World",
        longitude: -73.9843095,
        latitude: 40.75934109999999,
      },
      {
        name: "M&M'S World New York",
        longitude: -73.9843631,
        latitude: 40.7601775,
      },
      { name: "NBA Store", longitude: -73.9793828, latitude: 40.7552241 },
      {
        name: "Nintendo NY",
        longitude: -73.97944199999999,
        latitude: 40.7580592,
      },
      {
        name: "The LEGO Store Fifth Avenue",
        longitude: -73.97714549999999,
        latitude: 40.7591306,
      },
      {
        name: "Tiffany & Co. - 5th Avenue",
        longitude: -73.9739144,
        latitude: 40.7626931,
      },
      { name: "Trump Tower", longitude: -73.973794, latitude: 40.7624284 },
      {
        name: "Strawberry Fields",
        longitude: -73.97473149999999,
        latitude: 40.7756978,
      },
      {
        name: "Alice in Wonderland",
        longitude: -73.9665454,
        latitude: 40.77503609999999,
      },
    ],

    NatureRoute: [
      {
        name: "The High Line",
        longitude: -74.00531889999999,
        latitude: 40.7558131,
      },
      { name: "Bryant Park", longitude: -73.9832326, latitude: 40.7535965 },
      {
        name: "Hallett Nature Sanctuary",
        longitude: -73.9750243,
        latitude: 40.7666397,
      },
      { name: "Sheep Meadow", longitude: -73.9748418, latitude: 40.7717813 },
      {
        name: "Conservatory Garden",
        longitude: -73.9524588,
        latitude: 40.7936928,
      },
      {
        name: "The Ramble",
        longitude: -73.9697174,
        latitude: 40.77787360000001,
      },
      {
        name: "Loeb Boathouse",
        longitude: -73.96876929999999,
        latitude: 40.7752927,
      },
      {
        name: "Strawberry Fields",
        longitude: -73.97473149999999,
        latitude: 40.7756978,
      },
      {
        name: "Belvedere Castle",
        longitude: -73.9690677,
        latitude: 40.7794302,
      },
      { name: "Central Park Zoo", longitude: -73.9718335, latitude: 40.767778 },
      {
        name: "Washington Square Park",
        longitude: -73.997332,
        latitude: 40.7308838,
      },
      {
        name: "Tompkins Square Park",
        longitude: -73.9817841,
        latitude: 40.72642949999999,
      },
    ]
  };

  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 40.763733,
          longitude: -73.978197,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        }}
      >
        <Polygon
          coordinates={this.state.UpperEastSide}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.UpperWestSide}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.MidtownWest}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.MidtownEast}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.Chelsea}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.Gramercy}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.GreenwichVillage}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.EastVillage}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.Noho}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.Tribeca}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.Soho}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.LowerEastSide}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.Nolita}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.Chinatown}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.FinancialDistrict}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        <Polygon
          coordinates={this.state.BatteryPark}
          fillColor={"rgba(255, 87, 51  ,0.1)"}
        />
        //CLASSIC ROUTE POINTS
        {this.state.ClassicRoute.map((marker) => (
          <Marker
            key={marker.name}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.name}
          ></Marker>
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
  },
  map: {
    height: "100%",
  },
});
