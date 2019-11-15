### Weather api
- Get weather from [CWB](https://opendata.cwb.gov.tw/index) and save to DB hourly
- Api: [GET] /weather
  - parameters:
    - cities
      - only 臺北市, 新北市, 桃園市
      - support multiple cites, e.g., cities=臺北市,新北市
      - optional
      