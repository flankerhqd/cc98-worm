# coding=utf-8
import urllib2
import cookielib
import re
from bs4 import BeautifulSoup
from urllib import urlencode
bbs_cookie=""
opener = urllib2.build_opener()
def fetch(url):
     request = urllib2.Request(url)
     request.add_header('Cookie',gl_cookie)
     data = opener.open(request).read()
     return data
def gao(name):
     pass
if __name__ == "__main__":
     pattern = re.compile('<a href="dispuser\.asp\?id=\d+" target="_blank">([^<]*)<\/a>',re.DOTALL)
     for index in xrange(1,20):
          user_list = fetch("http://www.cc98.org/toplist.asp?page=%d&orders=1"%index)
          for match in pattern.finditer(user_list):
               print match.group(1)
     
     

     