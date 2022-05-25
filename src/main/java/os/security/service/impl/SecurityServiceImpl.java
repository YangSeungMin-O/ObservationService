package os.security.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import os.security.service.SecurityService;

@Service("securityService")
public class SecurityServiceImpl implements SecurityService {
	
	@Resource(name = "securityMapper")
	private SecurityMapper mapper;

}
