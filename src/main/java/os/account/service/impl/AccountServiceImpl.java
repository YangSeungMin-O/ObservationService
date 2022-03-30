package os.account.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import os.account.service.AccountService;

@Service("accountService")
public class AccountServiceImpl implements AccountService {
	
	@Resource(name = "accountMapper")
	private AccountMapper mapper;
}
