package os.main.web;

import java.util.Date;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component; 
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.io.BufferedReader;
import java.io.IOException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import os.main.service.MainService;

@Controller
public class MainController {

	@Resource(name = "mainService")
	private MainService service;
	
	/* 메인페이지 */
	@RequestMapping(value = "/mainPage.do")
	public ModelAndView mainPage2(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, Object> commandMap) throws Exception {
		ModelAndView mav = new ModelAndView();		
		String resultURL = "mainPage/polygon";
		mav.setViewName(resultURL);
		return mav;
	}
	
	/* 메인페이지2 */
	@RequestMapping(value = "/mainPage2.do")
	public ModelAndView mainPage(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, Object> commandMap) throws Exception {
		ModelAndView mav = new ModelAndView();		
		String resultURL = "mainPage/mainPage";
		mav.setViewName(resultURL);
		return mav;
	}
}	
	/* API호출 (기상청 예시) 기상청 단기예보(동네예보) API */
	/* 기상개황, 육상, 해상 */
	/* 통보문 발표시간 05시 11시 17시 */
/*	@RequestMapping(value = "/weatherData.do")
    public ModelAndView weatherData() throws IOException, IOException, ParseException {
		ModelAndView jsonView = new ModelAndView("jsonView");
        StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/1360000/VilageFcstMsgService/getLandFcst"); URL
        urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=9wnMobsB4Ky4A%2BrjVg9P3BBdVjFEmqEEI70Uc49cCp8bNo%2Bopo3J%2FjtjlbGGbcp4yax%2BWzn%2BjGn23RF4DBtwfg%3D%3D"); Service Key
        urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("10", "UTF-8")); 한 페이지 결과 수
        urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); 페이지번호
        urlBuilder.append("&" + URLEncoder.encode("dataType","UTF-8") + "=" + URLEncoder.encode("JSON", "UTF-8")); 요청자료형식(XML/JSON)Default: XML
        urlBuilder.append("&" + URLEncoder.encode("regId","UTF-8") + "=" + URLEncoder.encode("11B20612", "UTF-8"));  11B20612 용인코드 기준 엑셀파일 참고  
        URL url = new URL(urlBuilder.toString());
        //System.out.println(url);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        //System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;
		
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        rd.close();
        conn.disconnect();        
        String result= sb.toString();
        
         JsonSimple 1.1.1사용 메이븐으로 잘 안잡히기때문에 직접 경로지정하여 빌드하는것이 좋다 
		JSONParser jsonParser = new JSONParser();
		JSONObject jsonObj = (JSONObject) jsonParser.parse(result);
		JSONObject parse_response = (JSONObject) jsonObj.get("response");
		JSONObject parse_body = (JSONObject) parse_response.get("body");
		JSONObject parse_items = (JSONObject) parse_body.get("items");
		JSONArray parse_item = (JSONArray) parse_items.get("item");
        
		SimpleDateFormat currentDateTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");		
		String latestDate = currentDateTime.format(new Date()).toString();
		System.out.println("현재 시간 : " + latestDate + " 호출 합니다");
		
        jsonView.addObject("result", parse_item);
        return jsonView;
    }*/

	  /* 스케줄러는 매게변수를 받지 않는 메소드에 한해 사용가능하다 */
/*	  @Scheduled(fixedRateString = "60000", initialDelay = 3000)	//1분마다 3초 대기 후
	  @Scheduled(cron = " * * * * * * ")	//매초마다
	  public void timeScheduled() {
      SimpleDateFormat currentDateTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");		
		String latestDate = currentDateTime.format(new Date()).toString();
		System.out.println("현재 시간 : " + latestDate + " 호출 합니다");
    }*/
