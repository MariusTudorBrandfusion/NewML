<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
  <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"  encoding="utf-8" />
  <xsl:param name="html-content-type" />
  <xsl:template match="/NavigationTree">

    <xsl:if test="count(//Page) > 0">
      <ul>
        <xsl:if test="Settings/LayoutNavigationSettings/@cssclass!=''">
          <xsl:attribute name="class">
            <xsl:value-of select="Settings/LayoutNavigationSettings/@cssclass" disable-output-escaping="yes"/>
          </xsl:attribute>
        </xsl:if>
        <xsl:if test="Settings/LayoutNavigationSettings/@id!=''">
          <xsl:attribute name="id">
            <xsl:value-of select="Settings/LayoutNavigationSettings/@id" disable-output-escaping="yes"/>
          </xsl:attribute>
        </xsl:if>

        <xsl:apply-templates select="Page">
          <xsl:with-param name="depth" select="1"/>
        </xsl:apply-templates>
      </ul>
    </xsl:if>

  </xsl:template>

  <xsl:template match="//Page">
    <xsl:param name="depth"/>
    <xsl:if test="@Allowclick='True'">
      <li>
        <xsl:attribute name="class">
          <xsl:text disable-output-escaping="yes">menu-mobile__item dw-mod</xsl:text>
          <xsl:if test="@RelativeLevel='1'">
            <xsl:text disable-output-escaping="yes"> dw-navbar-button</xsl:text>
          </xsl:if>
          <xsl:if test="@Active='True'"> menu-mobile__item--active </xsl:if>
          <xsl:if test="count(Page) and /NavigationTree/Settings/LayoutNavigationSettings/@endlevel > @RelativeLevel">
            <xsl:text disable-output-escaping="yes"> is-submenu</xsl:text>
          </xsl:if>
        </xsl:attribute>
        <a>
          <xsl:attribute name="class">
            <xsl:text disable-output-escaping="yes">menu-mobile__link dw-mod </xsl:text>
            menu-mobile__link--level-<xsl:value-of select="@AbsoluteLevel"></xsl:value-of>
            <xsl:if test="@Active='True'"> menu-mobile__link--active </xsl:if>
          </xsl:attribute>
          <xsl:if test="@RelativeLevel='1' and @Sort='1'">
            <xsl:attribute name="id">home</xsl:attribute>
          </xsl:if>
          <xsl:attribute name="href">
            <xsl:value-of select="@FriendlyHref" disable-output-escaping="yes"/>
          </xsl:attribute>
          <xsl:value-of select="@MenuText" disable-output-escaping="yes"/>
        </a>
        <xsl:if test="count(Page) and /NavigationTree/Settings/LayoutNavigationSettings/@endlevel > @RelativeLevel">
            <ul class="menu-mobile menu-mobile__submenu">
              <xsl:apply-templates select="Page">
                <xsl:with-param name="depth" select="$depth+1"/>
              </xsl:apply-templates>
            </ul>
        </xsl:if>
      </li>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>