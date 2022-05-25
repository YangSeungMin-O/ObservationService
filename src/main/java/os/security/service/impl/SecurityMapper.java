package os.security.service.impl;

import java.util.HashMap;

import os.security.web.SecurityVO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("securityMapper")
public interface SecurityMapper {
	// 요청 URL에 맞는 권한 가져오기
	public String select(HashMap<String, Object> params);
	
	// 사용자 정보 가져오기
	public SecurityVO login(String userId);
	
	// 회원가입 정보 DB전달
	public void signUp(HashMap<String, Object> params);
	
	// 로그인 실패 횟수 조회 (로그인 실패 시)
	public int selectCnt(String userId);
	
	// 계정 잠금(로그인 3회 실패 시)
	public void lock(String userId);
	
	// 로그인 실패 횟수 추가 (로그인 실패 시)
	public void PlusCnt(String userId);
	
	// 로그인 실패 횟수 초기화 (로그인 성공 시)
	public void resetCnt(String userId);
	
	public int exists(String userId);
}
