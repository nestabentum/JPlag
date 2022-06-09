package de.jplag.emf;

import static de.jplag.emf.MetamodelTokenConstants.*;
import static de.jplag.emf.MetamodelTokenConstants.ANNOTATION;
import static de.jplag.emf.MetamodelTokenConstants.ATTRIBUTE;
import static de.jplag.emf.MetamodelTokenConstants.CLASS;
import static de.jplag.emf.MetamodelTokenConstants.DATATYPE;
import static de.jplag.emf.MetamodelTokenConstants.ENUM;
import static de.jplag.emf.MetamodelTokenConstants.ENUM_LITERAL;
import static de.jplag.emf.MetamodelTokenConstants.INTERFACE;
import static de.jplag.emf.MetamodelTokenConstants.OPERATION;
import static de.jplag.emf.MetamodelTokenConstants.PACKAGE;
import static de.jplag.emf.MetamodelTokenConstants.PARAMETER;
import static de.jplag.emf.MetamodelTokenConstants.REFERENCE;
import static de.jplag.emf.MetamodelTokenConstants.SUPER_TYPE;

import org.eclipse.emf.ecore.EAnnotation;
import org.eclipse.emf.ecore.EAttribute;
import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EClassifier;
import org.eclipse.emf.ecore.EDataType;
import org.eclipse.emf.ecore.EEnum;
import org.eclipse.emf.ecore.EEnumLiteral;
import org.eclipse.emf.ecore.EOperation;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.EParameter;
import org.eclipse.emf.ecore.EReference;

public class TokenGeneratingMetamodelVisitor extends AbstractMetamodelVisitor {
    private EcoreParser parser;

    public TokenGeneratingMetamodelVisitor(EcoreParser parser) {
        this.parser = parser;
    }

    @Override
    protected void visitEAnnotation(EAnnotation eAnnotation) {
        parser.addToken(ANNOTATION, eAnnotation);
    }

    @Override
    protected void visitEAttribute(EAttribute eAttribute) {
        if (eAttribute.isID()) {
            parser.addToken(ID_ATTRIBUTE, eAttribute);
        } else {
            parser.addToken(ATTRIBUTE, eAttribute);
        }

    }

    @Override
    protected void visitEClass(EClass eClass) {
        if (eClass.isInterface()) {
            parser.addToken(INTERFACE, eClass);
        } else if (eClass.isAbstract()) {
            parser.addToken(ABSTRACT_CLASS, eClass);
        } else {
            parser.addToken(CLASS, eClass);
        }
        eClass.getESuperTypes().forEach(it -> parser.addToken(SUPER_TYPE, it));
    }

    @Override
    protected void visitEClassifier(EClassifier eClassifier) {
        // TODO TS: Parse type parameters & generic type?
    }

    @Override
    protected void visitEDataType(EDataType eDataType) {
        if (!(eDataType instanceof EEnum)) {
            parser.addToken(DATATYPE, eDataType);
        }
    }

    @Override
    protected void visitEEnum(EEnum eEnum) {
        parser.addToken(ENUM, eEnum);
    }

    @Override
    protected void visitEEnumLiteral(EEnumLiteral eEnumLiteral) {
        parser.addToken(ENUM_LITERAL, eEnumLiteral);
    }

    @Override
    protected void visitEOperation(EOperation eOperation) {
        parser.addToken(OPERATION, eOperation);
        if (eOperation.getEType() != null) {
            parser.addToken(RETURN_TYPE, eOperation);
        }
        eOperation.getEExceptions().forEach(it -> parser.addToken(THROWS_DECLARATION, it));
        // TODO TS: Parse type parameters & generic type?
    }

    @Override
    protected void visitEPackage(EPackage ePackage) {
        parser.addToken(PACKAGE, ePackage);
    }

    @Override
    protected void visitEParameter(EParameter eParameter) {
        parser.addToken(PARAMETER, eParameter);
    }

    @Override
    protected void visitEReference(EReference eReference) {
        if (eReference.isContainment()) {
            parser.addToken(CONTAINMENT, eReference);
        } else {
            parser.addToken(REFERENCE, eReference);
        }

    }

}
